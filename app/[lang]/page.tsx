import { notFound } from "next/navigation";
import { AssistantDemo } from "@/components/assistant-demo";
import { Footer, Header } from "@/components/chrome";
import { CheckDemo, DraftingDemo, FirmDemo, ReviewDemo, SearchDemo } from "@/components/demos";
import { IconArrow, IconPlay } from "@/components/icons";
import { type PlatformPanel, PlatformTabs } from "@/components/platform-tabs";
import { APP_URL, CONTACT_EMAIL, getDictionary, isLocale } from "@/lib/i18n";
import { testimonials } from "@/lib/testimonials";

// Outline (docs/research/landing-page-outlines.md, option 1 "platform tabs"):
// hero → corpus strip → platform tabs → Tunisian law first → trust → film →
// (testimonials, once real) → access.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const [search, assistant, review, drafting, firm] = t.platform.tabs;
  const panels: PlatformPanel[] = [
    { id: "recherche", label: search, title: t.search.title, body: t.search.body, points: t.search.notes,
      demo: <div className="dark demo-dark"><SearchDemo t={t.search} /></div> },
    { id: "assistant", label: assistant, title: t.check.title, body: t.check.body, points: t.check.notes,
      demo: <CheckDemo t={t.check} a={t.assistant} /> },
    { id: "revue", label: review, title: t.review.title, body: t.review.body, points: t.review.notes,
      demo: <ReviewDemo t={t.review} /> },
    { id: "redaction", label: drafting, title: t.drafting.title, body: t.drafting.body, points: t.drafting.notes,
      demo: <DraftingDemo t={t.drafting} /> },
    { id: "cabinet", label: firm, title: t.firm.title, body: t.firm.body, points: t.firm.notes,
      demo: <FirmDemo t={t.firm} /> },
  ];

  return (
    <>
      <a className="skip" href="#main">{t.nav.skip}</a>
      <Header t={t.nav} lang={lang} />

      <main id="main">
        <section className="hero" aria-labelledby="hero-h">
          <div className="wrap hero-grid">
            <div>
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
              <p className="hero-note">{t.hero.note}</p>
            </div>
            <AssistantDemo t={t.assistant} />
          </div>
        </section>

        <div className="strip" aria-label={t.strip.join(", ")}>
          <div className="wrap strip-row">
            {t.strip.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        <section id="plateforme" className="section" aria-labelledby="plateforme-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="plateforme-h" className="h2">{t.platform.title}</h2>
              <p className="body">{t.platform.lede}</p>
            </div>
            <PlatformTabs panels={panels} label={t.platform.title} />
          </div>
        </section>

        <section id="droit-tunisien" className="section sable" aria-labelledby="local-h">
          <div className="wrap split">
            <div className="section-head">
              <h2 id="local-h" className="h2">{t.local.title}</h2>
              <p className="body">{t.local.body}</p>
              <div className="lang-lines">
                {t.languages.samples.map((s) => (
                  <p key={s.lang} className="lang-line" dir={s.lang === "ar" ? "rtl" : "ltr"}>
                    <small lang="en">{s.lang}</small>
                    <span lang={s.lang}>{s.text}</span>
                  </p>
                ))}
              </div>
            </div>
            <dl className="facts">
              {t.local.points.map((p) => (
                <div key={p.title} className="fact">
                  <dt>{p.title}</dt>
                  <dd>{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="confiance" className="section" aria-labelledby="trust-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="trust-h" className="h2">{t.trust.title}</h2>
              <p className="body">{t.trust.body}</p>
            </div>
            <dl className="facts facts-grid">
              {t.trust.points.map((p) => (
                <div key={p.title} className="fact">
                  <dt>{p.title}</dt>
                  <dd>{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="film" className="section dark" aria-labelledby="film-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="film-h" className="h2">{t.film.title}</h2>
              <p className="body">{t.film.body}</p>
            </div>
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

        <section id="acces" className="section dark close" aria-labelledby="acces-h">
          <div className="wrap split">
            <div className="section-head">
              <h2 id="acces-h" className="h2">{t.close.title}</h2>
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
            <ol className="steps">
              {t.close.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <Footer t={t.footer} nav={t.nav} lang={lang} />
    </>
  );
}
