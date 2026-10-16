import type { Dict } from "@/lib/dictionaries/fr";
import { getContent } from "@/lib/content";
import { APP_URL, CONTACT_EMAIL, LEGAL_LIVE, LEGAL_URLS, type Locale } from "@/lib/i18n";
import { type PageId, type SectionId, pageHref, pageIds, pagesIn, sectionHref } from "@/lib/pages";
import { IconMenu, Logo } from "./icons";
import { LangMenu } from "./lang-menu";

type Alternates = Record<Locale, string>;

export function Header({ t, lang, alternates }: { t: Dict["nav"]; lang: Locale; alternates?: Alternates }) {
  const links = [
    { href: sectionHref("features", lang), label: t.features },
    { href: sectionHref("useCases", lang), label: t.useCases },
    { href: pageHref("faq", lang), label: t.faq },
  ];
  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="brand" href={`/${lang}`} aria-label="Clauze">
          <Logo />
          <span className="brand-word" lang="en">Clauze</span>
        </a>
        <nav className="header-nav" aria-label={t.menu}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="header-end">
          <LangMenu current={lang} label={t.language} alternates={alternates} />
          <a className="login" href={`${APP_URL}/login`}>{t.login}</a>
          <a className="btn btn-sm" href={`${APP_URL}/signup`}>{t.cta}</a>
          <details className="menu">
            <summary>
              <IconMenu />
              {t.menu}
            </summary>
            <div className="menu-panel">
              {links.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
              <a href={`${APP_URL}/login`}>{t.login}</a>
              <a href={`${APP_URL}/signup`} className="btn btn-sm" style={{ justifyContent: "center" }}>{t.cta}</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer({
  t,
  nav,
  lang,
  alternates,
}: {
  t: Dict["footer"];
  nav: Dict["nav"];
  lang: Locale;
  alternates?: Alternates;
}) {
  const c = getContent(lang);
  const label = (id: PageId) => c.pages[id].label ?? c.pages[id].eyebrow;
  const column = (section: SectionId) => (
    <div>
      <h3><a href={sectionHref(section, lang)}>{c.sections[section].nav}</a></h3>
      <ul>
        {pagesIn(section).map((id) => (
          <li key={id}><a href={pageHref(id, lang)}>{label(id)}</a></li>
        ))}
      </ul>
    </div>
  );
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
            <p className="footer-contact">
              <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr">{CONTACT_EMAIL}</a>
            </p>
          </div>
          {column("features")}
          {column("useCases")}
          {column("compare")}
          <div>
            <h3>{t.resources}</h3>
            <ul>
              {pageIds
                .filter((id) => id === "faq" || id === "security")
                .map((id) => (
                  <li key={id}><a href={pageHref(id, lang)}>{label(id)}</a></li>
                ))}
              <li><a href={`${APP_URL}/signup`}>{t.signup}</a></li>
              <li><a href={`${APP_URL}/login`}>{t.login}</a></li>
              {LEGAL_LIVE && (
                <>
                  <li><a href={LEGAL_URLS.terms}>{t.terms}</a></li>
                  <li><a href={LEGAL_URLS.privacy}>{t.privacy}</a></li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Clauze. {t.rights}</span>
          <LangMenu current={lang} label={nav.language} alternates={alternates} up />
        </div>
      </div>
    </footer>
  );
}
