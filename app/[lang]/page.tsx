import { notFound } from "next/navigation";
import { AssistantDemo } from "@/components/assistant-demo";
import { Annotated } from "@/components/annotated";
import { Article, Footer, Header } from "@/components/chrome";
import { CheckDemo, DraftingDemo, FirmDemo, ReviewDemo, SearchDemo } from "@/components/demos";
import { IconArrow, IconPlay } from "@/components/icons";
import { APP_URL, CONTACT_EMAIL, getDictionary, isLocale } from "@/lib/i18n";
import { testimonials } from "@/lib/testimonials";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const [no1, no2, no3, no4, no5, no6, no7, no8] = t.articles;

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
              <p className="hero-note">
                <b>{no1}</b>
                <span>{t.hero.note}</span>
              </p>
            </div>
            <AssistantDemo t={t.assistant} />
          </div>
        </section>

        <Article id="recherche" no={no2} title={t.search.title} body={t.search.body} notes={t.search.notes} tone="dark">
          <SearchDemo t={t.search} />
        </Article>

        <Article id="assistant" no={no3} title={t.check.title} body={t.check.body} notes={t.check.notes}>
          <CheckDemo t={t.check} a={t.assistant} />
        </Article>

        <Article id="revue" no={no4} title={t.review.title} body={t.review.body} notes={t.review.notes} tone="sable">
          <ReviewDemo t={t.review} />
        </Article>

        <Article id="redaction" no={no5} title={t.drafting.title} body={t.drafting.body} notes={t.drafting.notes}>
          <DraftingDemo t={t.drafting} />
        </Article>

        <Article id="cabinet" no={no6} title={t.firm.title} body={t.firm.body} notes={t.firm.notes} tone="sable">
          <FirmDemo t={t.firm} />
        </Article>

        {testimonials.length > 0 && (
          <section className="article" aria-label="Témoignages">
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

        <Article
          id="langues"
          no={no7}
          title={t.languages.title}
          body={t.languages.body}
          notes={t.languages.notes}
          after={
            <div className="lang-lines">
              {t.languages.samples.map((s) => (
                <p key={s.lang} className="lang-line" dir={s.lang === "ar" ? "rtl" : "ltr"}>
                  <small lang="en">{s.lang}</small>
                  <span lang={s.lang}>{s.text}</span>
                </p>
              ))}
            </div>
          }
        />

        <Article id="film" no={no8} title={t.film.title} body={t.film.body} notes={t.film.notes} tone="dark">
          <div className="film" style={{ marginTop: 0 }}>
            <video
              controls
              playsInline
              preload="metadata"
              src="/clauze-promo.mp4#t=5.5"
              aria-label={t.film.play}
            />
          </div>
        </Article>

        <section id="acces" className="article dark close" aria-labelledby="acces-h">
          <Annotated
            id="acces"
            no={t.close.no}
            title={t.close.title}
            notes={t.close.notes}
            after={
              <>
                <ol className="steps">
                  {t.close.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
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
              </>
            }
          />
        </section>
      </main>

      <Footer t={t.footer} nav={t.nav} lang={lang} />
    </>
  );
}
