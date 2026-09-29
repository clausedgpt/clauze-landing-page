import type { ComponentType, SVGProps } from "react";
import { notFound } from "next/navigation";
import { AssistantDemo } from "@/components/assistant-demo";
import { Footer, Header } from "@/components/chrome";
import { Counter } from "@/components/counter";
import {
  IconArrow,
  IconBadge,
  IconCheck,
  IconEyeOff,
  IconLanguages,
  IconLayers,
  IconLock,
  IconPlay,
  IconShield,
} from "@/components/icons";
import { Pattern } from "@/components/pattern";
import { Showcase } from "@/components/showcase";
import { APP_URL, CONTACT_EMAIL, getDictionary, isLocale } from "@/lib/i18n";
import { testimonials } from "@/lib/testimonials";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  corpus: IconLayers,
  langs: IconLanguages,
  force: IconBadge,
  check: IconCheck,
  lock: IconLock,
  eye: IconEyeOff,
  shield: IconShield,
};

// Layout after the legal-tech research (docs/research/landing-page-outlines.md):
// short hero over a patterned ground → fact strip → looping product showcase →
// Tunisian-law band → trust one-liners → film → FAQ → closing CTA.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <a className="skip" href="#main">{t.nav.skip}</a>
      <Header t={t.nav} lang={lang} />

      <main id="main">
        <section className="hero" aria-labelledby="hero-h">
          <Pattern id="hero-pattern" className="pattern-hero" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-h" className="h1">{t.hero.title}</h1>
              <p className="lede">{t.hero.lede}</p>
              <div className="actions">
                <a className="btn btn-lg" href={`${APP_URL}/signup`}>
                  {t.hero.cta}
                  <IconArrow className="dir" />
                </a>
                <a className="link" href="#film">
                  <IconPlay style={{ width: 20, height: 20 }} />
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <AssistantDemo t={t.assistant} />
              <span className="float-chip chip-a" aria-hidden="true">
                <IconLayers />
                {t.hero.chips.corpus}
              </span>
              <span className="float-chip chip-b" aria-hidden="true">
                <IconCheck />
                {t.hero.chips.verified}
              </span>
              <span className="float-chip chip-c" aria-hidden="true">
                <IconLanguages />
                {t.hero.chips.langs}
              </span>
            </div>
          </div>
        </section>

        <div className="facts-strip">
          <ul className="wrap facts-row">
            {t.facts.map((f) => {
              const I = ICONS[f.icon];
              return (
                <li key={f.text}>
                  <I />
                  <span>{f.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <section id="plateforme" className="section" aria-labelledby="plateforme-h">
          <div className="wrap">
            <div className="section-head center">
              <h2 id="plateforme-h" className="h2">{t.showcase.title}</h2>
              <p className="body">{t.showcase.lede}</p>
            </div>
            <Showcase items={t.showcase.items} scenes={t.scenes} />
          </div>
        </section>

        <section id="droit-tunisien" className="section band" aria-labelledby="local-h">
          <Pattern id="band-pattern" className="pattern-band" />
          <div className="wrap band-grid">
            <div>
              <h2 id="local-h" className="h2">{t.local.title}</h2>
              <p className="band-count">
                <Counter value={73635} locale={lang} />
                <span className="band-label">{t.local.counter}</span>
              </p>
            </div>
            <ul className="band-points">
              {t.local.points.map((p) => (
                <li key={p}>
                  <IconCheck />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="confiance" className="section" aria-labelledby="trust-h">
          <div className="wrap">
            <h2 id="trust-h" className="h2 center-h">{t.trust.title}</h2>
            <ul className="trust-row">
              {t.trust.points.map((p) => {
                const I = ICONS[p.icon];
                return (
                  <li key={p.text}>
                    <span className="trust-icon"><I /></span>
                    <span>{p.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="film" className="section dark" aria-labelledby="film-h">
          <div className="wrap">
            <h2 id="film-h" className="h2 center-h">{t.film.title}</h2>
            <div className="film">
              <video controls playsInline preload="metadata" src="/clauze-promo.mp4#t=5.5" aria-label={t.film.play} />
            </div>
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="section" aria-label="Testimonials">
            <div className="wrap">
              {testimonials.map((q) => (
                <figure key={q.name} style={{ margin: 0 }}>
                  <blockquote className="law h2" lang={q.quoteLang}>{q.quote}</blockquote>
                  <figcaption className="body">{q.name} · {q.role}, {q.firm}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section id="faq" className="section" aria-labelledby="faq-h">
          <div className="wrap faq-grid">
            <h2 id="faq-h" className="h2">{t.faq.title}</h2>
            <div className="faq-list">
              {t.faq.items.map((f, i) => (
                <details key={f.q} className="faq-item" open={i === 0}>
                  <summary>
                    <span>{f.q}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="acces" className="section dark close" aria-labelledby="acces-h">
          <Pattern id="close-pattern" className="pattern-dark" />
          <div className="wrap close-inner">
            <h2 id="acces-h" className="h2">{t.close.title}</h2>
            <p className="body">{t.close.line}</p>
            <div className="actions">
              <a className="btn btn-lg" href={`${APP_URL}/signup`}>
                {t.close.cta}
                <IconArrow className="dir" />
              </a>
            </div>
            <p className="contact">
              {t.close.contact}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr">{CONTACT_EMAIL}</a>
            </p>
          </div>
        </section>
      </main>

      <Footer t={t.footer} nav={t.nav} lang={lang} />
    </>
  );
}
