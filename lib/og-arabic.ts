import { readFileSync } from "node:fs";
import { join } from "node:path";
import * as hb from "harfbuzzjs";

/*
 * Arabic for the social images. Satori (next/og) joins Arabic letters but
 * measures words as if they were unjoined, so lines come out with ragged,
 * overlapping words. HarfBuzz shapes the text properly; we draw its glyph
 * outlines into an SVG that the image embeds as a picture.
 *
 * Bidi is kept minimal: words run right to left, and consecutive Latin words
 * (e.g. "ChatGPT", "Clauze") stay together in left-to-right order.
 */

const data = readFileSync(join(process.cwd(), "assets/fonts/ReadexPro-SemiBold.ttf"));
const face = new hb.Face(new hb.Blob(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)));
const font = new hb.Font(face);

const RTL = /[֐-ࣿיִ-﻿]/;

type Run = { glyphs: { d: string; x: number; y: number }[]; width: number };

function shape(text: string, rtl: boolean): Run {
  const buf = new hb.Buffer();
  buf.addText(text);
  buf.guessSegmentProperties();
  buf.setDirection(rtl ? hb.Direction.RTL : hb.Direction.LTR);
  hb.shape(font, buf);
  const pos = buf.getGlyphPositions();
  let x = 0;
  const glyphs = buf.getGlyphInfos().map((g, i) => {
    const glyph = { d: font.glyphToPath(g.codepoint), x: x + pos[i].xOffset, y: pos[i].yOffset };
    x += pos[i].xAdvance;
    return glyph;
  });
  return { glyphs, width: x };
}

/** Right-aligned, wrapped text as an SVG data URI of `width` × returned height. */
export function arabicSvg(text: string, o: { size: number; width: number; lineHeight: number; color: string; maxLines?: number }) {
  const scale = o.size / face.upem;
  const space = shape(" ", false).width * scale;
  const units: { text: string; rtl: boolean }[] = [];
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const rtl = RTL.test(word) || !/[A-Za-z0-9]/.test(word);
    const last = units.at(-1);
    if (last && !last.rtl && !rtl) last.text += ` ${word}`;
    else units.push({ text: word, rtl });
  }
  const runs = units.map((u) => {
    const r = shape(u.text, u.rtl);
    return { ...r, px: r.width * scale };
  });

  const lines: (typeof runs)[] = [];
  let line: typeof runs = [];
  let used = 0;
  for (const r of runs) {
    const add = (line.length ? space : 0) + r.px;
    if (line.length && used + add > o.width) {
      lines.push(line);
      line = [r];
      used = r.px;
    } else {
      line.push(r);
      used += add;
    }
  }
  if (line.length) lines.push(line);
  const shown = lines.slice(0, o.maxLines ?? lines.length);

  let paths = "";
  shown.forEach((l, i) => {
    const baseline = (i + 0.78) * o.lineHeight;
    let right = o.width;
    for (const r of l) {
      const left = right - r.px;
      for (const g of r.glyphs) {
        if (!g.d) continue;
        const x = (left + g.x * scale).toFixed(2);
        const y = (baseline - g.y * scale).toFixed(2);
        paths += `<path transform="translate(${x} ${y}) scale(${scale} ${-scale})" d="${g.d}"/>`;
      }
      right = left - space;
    }
  });
  const height = Math.ceil(shown.length * o.lineHeight);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${o.width}" height="${height}" viewBox="0 0 ${o.width} ${height}"><g fill="${o.color}">${paths}</g></svg>`;
  return { src: `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`, width: o.width, height };
}
