import type { ReactNode } from "react";
import type { Dict } from "@/lib/dictionaries/fr";
import { APP_URL, CONTACT_EMAIL, type Locale, locales } from "@/lib/i18n";
import { Annotated } from "./annotated";
import { IconMenu, Logo } from "./icons";

const LANG_LABEL: Record<Locale, string> = { fr: "FR", ar: "ع", en: "EN" };
const LANG_NAME: Record<Locale, string> = { fr: "Français", ar: "العربية", en: "English" };

export function LangSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <nav className="langs" aria-label={label}>
      {locales.map((l) => (
        <a key={l} href={`/${l}`} hrefLang={l} lang={l} aria-current={l === current ? "page" : undefined} title={LANG_NAME[l]}>
          {LANG_LABEL[l]}
        </a>
      ))}
    </nav>
  );
}

export function Header({ t, lang }: { t: Dict["nav"]; lang: Locale }) {
  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="brand" href={`/${lang}`} aria-label="Clauze">
          <Logo />
          <span className="brand-word" lang="en">Clauze</span>
        </a>
        <nav className="nav" aria-label="Sections">
          {t.sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`}>
              <span className="nav-no">{i + 2}</span>
              {s.label}
            </a>
          ))}
        </nav>
        <div className="header-end">
          <LangSwitch current={lang} label={t.language} />
          <a className="login" href={`${APP_URL}/login`}>{t.login}</a>
          <a className="btn btn-sm" href={`${APP_URL}/signup`}>{t.cta}</a>
          <details className="menu">
            <summary>
              <IconMenu />
              {t.menu}
            </summary>
            <div className="menu-panel">
              {t.sections.map((s) => (
                <a key={s.id} href={`#${s.id}`}>{s.label}</a>
              ))}
              <hr />
              <a href={`${APP_URL}/login`}>{t.login}</a>
              <a href={`${APP_URL}/signup`} className="btn btn-sm" style={{ justifyContent: "center" }}>{t.cta}</a>
              <hr />
              <LangSwitch current={lang} label={t.language} />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

/** One article of the annotated code: main text column + margin column. */
export function Article({
  id,
  no,
  title,
  body,
  notes,
  tone,
  children,
  after,
}: {
  id: string;
  no: string;
  title: string;
  body?: string;
  notes?: string[];
  tone?: "dark" | "sable";
  children?: ReactNode;
  after?: ReactNode;
}) {
  return (
    <section id={id} className={`article ${tone ?? ""}`} aria-labelledby={`${id}-h`}>
      <Annotated id={id} no={no} title={title} body={body} notes={notes} after={after}>
        {children}
      </Annotated>
    </section>
  );
}

export function Footer({ t, nav, lang }: { t: Dict["footer"]; nav: Dict["nav"]; lang: Locale }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a className="brand" href={`/${lang}`} aria-label="Clauze">
              <Logo tone="dark" />
              <span className="brand-word" lang="en">Clauze</span>
            </a>
            <p className="footer-tag">{t.tagline}</p>
          </div>
          <div>
            <h3>{t.app}</h3>
            <ul>
              <li><a href={`${APP_URL}/signup`}>{t.signup}</a></li>
              <li><a href={`${APP_URL}/login`}>{t.login}</a></li>
            </ul>
          </div>
          <div>
            <h3>{t.contact}</h3>
            <ul>
              <li><a href={`mailto:${CONTACT_EMAIL}`} dir="ltr">{CONTACT_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Clauze. {t.rights}</span>
          <LangSwitch current={lang} label={nav.language} />
        </div>
      </div>
    </footer>
  );
}

