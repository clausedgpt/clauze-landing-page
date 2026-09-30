import type { Dict } from "@/lib/dictionaries/fr";
import { APP_URL, CONTACT_EMAIL, type Locale } from "@/lib/i18n";
import { IconMenu, Logo } from "./icons";
import { LangMenu } from "./lang-menu";

export function Header({ t, lang }: { t: Dict["nav"]; lang: Locale }) {
  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="brand" href={`/${lang}`} aria-label="Clauze">
          <Logo />
          <span className="brand-word" lang="en">Clauze</span>
        </a>
        <div className="header-end">
          <LangMenu current={lang} label={t.language} />
          <a className="login" href={`${APP_URL}/login`}>{t.login}</a>
          <a className="btn btn-sm" href={`${APP_URL}/signup`}>{t.cta}</a>
          <details className="menu">
            <summary>
              <IconMenu />
              {t.menu}
            </summary>
            <div className="menu-panel">
              <a href={`${APP_URL}/login`}>{t.login}</a>
              <a href={`${APP_URL}/signup`} className="btn btn-sm" style={{ justifyContent: "center" }}>{t.cta}</a>
            </div>
          </details>
        </div>
      </div>
    </header>
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
          <LangMenu current={lang} label={nav.language} up />
        </div>
      </div>
    </footer>
  );
}

