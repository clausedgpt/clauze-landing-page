"use client";

import { useRef, useState } from "react";
import type { Dict } from "@/lib/dictionaries/fr";
import { IconCheck, IconSend, Logo } from "./icons";
import { Leader, Typed, at, useStream, useTimeline } from "./motion";

type Props = { t: Dict["assistant"] };

// question typed → searching → answer streams → [1] draws its leader → source + check
const SCHEDULE = [200, 2300, 3400, 5200, 6000];

export function AssistantDemo({ t }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const marker = useRef<HTMLButtonElement>(null);
  const note = useRef<HTMLDivElement>(null);
  const chip = useRef<HTMLSpanElement>(null);
  const { step, style } = useTimeline(root, SCHEDULE);
  const [replay, setReplay] = useState(0);

  const words = t.answer.join("").split(/(\s+)/);
  const shown = useStream(words.length, step >= 3, 38);
  const streamed = words.slice(0, shown).join("");
  const [lead, bold] = t.answer;

  const drawn = step >= 4 && replay % 2 === 0;
  const highlight = step >= 5 && replay % 2 === 0 ? 1 : 0;

  // Re-draw the leader (off, then on) each time the marker is used.
  function pulse() {
    setReplay((r) => r + 1);
    window.setTimeout(() => setReplay((r) => r + 1), 60);
  }

  return (
    <div ref={root} className="panel" style={style}>
      <div className="panel-bar">
        <Logo />
        {t.label}
      </div>
      <div ref={body} className="panel-body" style={{ position: "relative" }}>
        <p className="bubble-q" style={at(1)}>
          <Typed text={t.question} active={step >= 1} />
        </p>
        {step === 2 && (
          <p className="status" aria-hidden="true">
            <span className="pulse" />
            {t.searching}
          </p>
        )}
        <p className="answer" style={at(3)} aria-live="off">
          {shown < words.length ? (
            streamed
          ) : (
            <>
              {lead}
              <strong>{bold}</strong>
              {t.answer[2]}
            </>
          )}
          <button
            ref={marker}
            type="button"
            className="cite"
            style={at(4)}
            aria-label={t.source}
            aria-pressed={drawn}
            onMouseEnter={pulse}
            onFocus={pulse}
            onClick={pulse}
          >
            1
          </button>
        </p>
        <div ref={note} className="source" style={at(5)} lang={t.quoteLang}>
          <div className="source-head">
            <span ref={chip} className="cite" aria-hidden="true">1</span>
            {t.source}
          </div>
          <q className="law" lang={t.quoteLang}>
            {t.quote[0]}
            <span className="mark" style={{ ["--hl" as string]: highlight }}>{t.quote[1]}</span>
            {t.quote[2]}
          </q>
          <span className="verified">
            <IconCheck />
            {t.verified}
          </span>
        </div>
        <div className="composer" aria-hidden="true">
          <span>{t.input}</span>
          <i><IconSend /></i>
        </div>
        <Leader container={body} from={marker} to={chip} drawn={drawn} />
      </div>
    </div>
  );
}
