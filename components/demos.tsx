"use client";

import { useRef, useState } from "react";
import type { Dict } from "@/lib/dictionaries/fr";
import { IconBell, IconCheck, IconDash, IconFile, IconPen, IconSearch } from "./icons";
import { Leader, Typed, at, useTimeline } from "./motion";

/* ── Art. 2 · Search ─────────────────────────────────────── */

export function SearchDemo({ t }: { t: Dict["search"] }) {
  const root = useRef<HTMLDivElement>(null);
  const { step, style } = useTimeline(root, [200, 1700, 1900, 2050, 2200, 2350, 2800]);

  return (
    <div ref={root} className="panel" style={style}>
      <div className="panel-body">
        <div className="searchbox" style={at(1)}>
          <IconSearch />
          <span className="q">
            <Typed text={t.query} active={step >= 1} />
          </span>
        </div>
        <p className="result-count" style={at(2)}>{t.count}</p>
        <ol className="results">
          {t.results.map((r, i) => (
            <li key={r.title} className="result" style={at(3 + i)}>
              <p className="result-title law" lang={r.lang} dir={r.lang === "ar" ? "rtl" : "ltr"}>
                {r.title}
              </p>
              <div className="tags">
                {r.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
                {r.inForce && (
                  <span className="tag tag-force" style={at(7)}>{t.inForce}</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ── Art. 3 · Citation check (the signature interaction) ─── */

export function CheckDemo({ t, a }: { t: Dict["check"]; a: Dict["assistant"] }) {
  const root = useRef<HTMLDivElement>(null);
  const marker = useRef<HTMLButtonElement>(null);
  const source = useRef<HTMLDivElement>(null);
  const chip = useRef<HTMLSpanElement>(null);
  const { step, style } = useTimeline(root, [150, 700, 1700, 2300]);
  const [off, setOff] = useState(false);

  function replay() {
    setOff(true);
    window.setTimeout(() => setOff(false), 60);
  }

  const drawn = step >= 2 && !off;
  const [lead, bold, tail] = a.answer;

  return (
    <div ref={root} style={style}>
      <div className="check-grid" style={{ position: "relative" }}>
        <div className="panel" style={at(1)}>
          <div className="panel-body">
            <div className="label-row ok">
              <IconCheck />
              {t.verifiedLabel}
            </div>
            <p className="answer" style={{ marginTop: 0 }}>
              {lead}
              <strong>{bold}</strong>
              {tail}
              <button
                ref={marker}
                type="button"
                className="cite"
                aria-label={a.source}
                aria-pressed={drawn}
                onMouseEnter={replay}
                onFocus={replay}
                onClick={replay}
              >
                1
              </button>
            </p>
          </div>
        </div>
        <div className="panel plain-panel" style={at(3)}>
          <div className="panel-body">
            <div className="label-row plain-label">
              <IconDash />
              {t.plainLabel}
            </div>
            <p className="answer plain-quote" style={{ marginTop: 0 }}>{t.plainText}</p>
          </div>
        </div>
        <div ref={source} className="source check-source" style={at(2)}>
          <div className="source-head">
            <span ref={chip} className="cite" aria-hidden="true">1</span>
            {a.source}
          </div>
          <q className="law" lang={a.quoteLang}>
            {a.quote[0]}
            <span className="mark" style={{ ["--hl" as string]: drawn ? 1 : 0 }}>{a.quote[1]}</span>
            {a.quote[2]}
          </q>
          <span className="verified">
            <IconCheck />
            {a.verified}
          </span>
        </div>
        <Leader container={root} from={marker} to={chip} drawn={drawn} />
      </div>
      <p className="hint">{t.hint}</p>
    </div>
  );
}

/* ── Art. 4 · Document review ────────────────────────────── */

const PAGE_LINES = 9;

export function ReviewDemo({ t }: { t: Dict["review"] }) {
  const root = useRef<HTMLDivElement>(null);
  const { step, style } = useTimeline(root, [150, 500, 2100, 2700, 3100, 3300, 3500]);
  const [picked, setPicked] = useState<number | null>(null);
  const activePage = picked !== null ? t.findings[picked].page : null;

  return (
    <div ref={root} className="panel review" style={style}>
      <div className="pages" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <div key={p} className="page" data-on={activePage === p} style={at(1)}>
            {Array.from({ length: PAGE_LINES }, (_, i) => (
              <i
                key={i}
                className={
                  (p === 3 && (i === 3 || i === 6)) || (p === 4 && i === 2) ? "hot" : undefined
                }
              />
            ))}
            <b>{p}</b>
          </div>
        ))}
      </div>
      <div className="review-main">
        <span className="file" style={at(1)}>
          <IconFile />
          {t.file}
        </span>
        <div className="progress" style={at(1)} aria-hidden="true">
          <i style={{ ["--p" as string]: step >= 2 ? 1 : 0 }} />
        </div>
        <p className="bubble-q" style={at(3)}>{t.question}</p>
        <p className="summary" style={at(4)}>{t.summary}</p>
        <ol className="findings">
          {t.findings.map((f, i) => (
            <li key={f.ref} style={at(5 + i)}>
              <button
                type="button"
                className="finding"
                aria-pressed={picked === i}
                onClick={() => setPicked(picked === i ? null : i)}
                onMouseEnter={() => setPicked(i)}
              >
                <b>{f.ref}</b>
                <span>{f.text}</span>
                <em>
                  {t.page} {f.page}
                </em>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ── Art. 5 · Contract drafting ──────────────────────────── */

export function DraftingDemo({ t }: { t: Dict["drafting"] }) {
  const root = useRef<HTMLDivElement>(null);
  const { step, style } = useTimeline(root, [150, 900]);
  const [state, setState] = useState<"proposed" | "accepted" | "declined">("proposed");
  const showEdit = step >= 2 || state !== "proposed";

  return (
    <div ref={root} className="panel draft" style={style}>
      <div className="doc" lang={t.articleHeading.startsWith("الفصل") ? "ar" : "fr"}>
        <p className="doc-title">{t.doc}</p>
        <div className="doc-art faded">
          <h4>{t.context[0].heading}</h4>
          <p className="law">{t.context[0].text}</p>
        </div>
        <div className="doc-art">
          <h4>{t.articleHeading}</h4>
          <p className="law" aria-live="polite">
            {t.before}
            {state === "declined" || !showEdit ? (
              t.removed
            ) : state === "accepted" ? (
              t.added
            ) : (
              <>
                <del className="del">{t.removed}</del> <ins className="ins">{t.added}</ins>
              </>
            )}
            {t.after}
          </p>
        </div>
        <div className="doc-art faded">
          <h4>{t.context[1].heading}</h4>
          <p className="law">{t.context[1].text}</p>
        </div>
      </div>
      <div className="draft-side">
        <p className="bubble-q" style={at(1)}>{t.instruction}</p>
        <div className="proposal" style={at(2)}>
          <p className="proposal-head">
            <IconPen style={{ width: 14, height: 14, display: "inline", verticalAlign: "-2px", marginInlineEnd: 6 }} />
            {t.proposed}
          </p>
          {state === "proposed" ? (
            <div className="proposal-btns">
              <button type="button" className="pbtn primary" onClick={() => setState("accepted")}>
                {t.accept}
              </button>
              <button type="button" className="pbtn" onClick={() => setState("declined")}>
                {t.decline}
              </button>
            </div>
          ) : (
            <button type="button" className="undo" onClick={() => setState("proposed")}>
              {t.undo}
            </button>
          )}
        </div>
        {state === "accepted" && (
          <>
            <p className="state-line">
              <IconCheck />
              {t.accepted}
            </p>
            <span className="export">
              <IconFile />
              {t.exported}
            </span>
          </>
        )}
        {state === "declined" && (
          <p className="state-line muted-line">
            <IconDash />
            {t.declined}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Art. 6 · Firm ───────────────────────────────────────── */

// October 2026 starts on a Thursday; hearing on the 14th, a matter due on the 20th.
const OCT_START = 3;
const TODAY = 13;
const HEARING = 14;
const DUE = 20;

export function FirmDemo({ t }: { t: Dict["firm"] }) {
  const root = useRef<HTMLDivElement>(null);
  const { style } = useTimeline(root, [150, 250, 350, 450, 1300]);
  const cells: { d: number; muted?: boolean }[] = [];
  for (let i = 0; i < OCT_START; i++) cells.push({ d: 28 + i, muted: true });
  for (let d = 1; d <= 31; d++) cells.push({ d });
  for (let d = 1; cells.length % 7; d++) cells.push({ d, muted: true });

  return (
    <div ref={root} className="panel firm" style={style}>
      <div className="matters">
        <table className="table">
          <thead>
            <tr>
              <th>{t.columns.client}</th>
              <th />
              <th className="bal">{t.columns.balance}</th>
            </tr>
          </thead>
          <tbody>
            {t.matters.map((m, i) => (
              <tr key={m.client} style={at(1 + i)}>
                <td>
                  <span className="client">{m.client}</span>
                  <span className="matter-sub">{m.matter}</span>
                </td>
                <td>
                  <span className={`pill pill-${m.status}`}>
                    {t.statuses[m.status as keyof typeof t.statuses]}
                  </span>
                </td>
                <td className="bal">{m.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="demo-flag">{t.demo}</p>
      </div>
      <div className="cal">
        <p className="cal-head">{t.month}</p>
        <div className="cal-grid" aria-hidden="true">
          {t.weekdays.map((w, i) => (
            <span key={i} className="wd">{w}</span>
          ))}
          {cells.map((c, i) => (
            <span
              key={i}
              className={[
                "d",
                c.muted && "muted",
                !c.muted && c.d === TODAY && "today",
                !c.muted && c.d === HEARING && "hearing",
                !c.muted && c.d === DUE && "due",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {c.d}
            </span>
          ))}
        </div>
        <div className="reminder" style={at(5)} role="status">
          <IconBell />
          <b>{t.reminder}</b>
          <span>{t.reminderWhere}</span>
        </div>
      </div>
    </div>
  );
}
