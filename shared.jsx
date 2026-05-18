/* shared.jsx — Header, Footer, theme persistence for all pages */

const THEME_KEY = 'ykim.theme';
const PHOTO_KEY = 'ykim.photoTreatment';

/* Apply theme on initial parse so there's no flash of wrong colors. */
(function () {
  try {
    const t = localStorage.getItem(THEME_KEY);
    if (t) document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();

function SharedHeader({ activePage }) {
  const items = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'publications', label: 'Publications', href: 'publications.html' },
    { id: 'news', label: 'News', href: 'news.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ];
  return (
    <header className="site-header" data-screen-label="Header">
      <div className="container site-header-inner">
        <a href="index.html" className="site-mark">
          <span className="dot"></span>Yushim Kim
        </a>
        <nav className="site-nav">
          {items.map((it) => (
            <a key={it.id} href={it.href} className={activePage === it.id ? 'active' : ''}>
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SharedFooter() {
  const D = window.SITE_DATA;
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Contact</h4>
            <div className="contact-h">
              Open to collaborations,<br />
              advising inquiries, and talks.
            </div>
            <p>
              <a href={`mailto:${D.email}`} className="link" style={{ color: 'var(--ink)' }}>
                {D.email}
              </a><br />
              {D.address}
            </p>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li><a href={D.links.asu} className="link" target="_blank" rel="noopener">ASU Faculty Profile ↗</a></li>
              <li><a href={D.links.scholar} className="link" target="_blank" rel="noopener">Google Scholar ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>Affiliations</h4>
            <ul>
              {D.affiliations.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <div>© {new Date().getFullYear()} Yushim Kim. Last updated May 2026.</div>
          <div>Phoenix, AZ</div>
        </div>
      </div>
    </footer>
  );
}

/* Minimal Tweaks panel for sub-pages: just theme (and photo if photo is on the page). */
function MiniTweaks({ theme, setTheme, includePhoto, photoTreatment, setPhotoTreatment }) {
  return (
    <TweaksPanel>
      <TweakSection label="Color theme" />
      <TweakRadio
        label="Theme"
        value={theme}
        options={[
          { value: 'press', label: 'Press' },
          { value: 'cool', label: 'Cool' },
          { value: 'warm', label: 'Warm' },
        ]}
        onChange={setTheme}
      />
      <TweakRadio
        label="Alt"
        value={theme}
        options={[
          { value: 'earth', label: 'Earth' },
          { value: 'mono', label: 'Mono' },
        ]}
        onChange={setTheme}
      />
      {includePhoto && (
        <>
          <TweakSection label="Photo" />
          <TweakRadio
            label="Style"
            value={photoTreatment}
            options={[
              { value: 'color', label: 'Color' },
              { value: 'duotone', label: 'Duotone' },
            ]}
            onChange={setPhotoTreatment}
          />
        </>
      )}
    </TweaksPanel>
  );
}

/* Read/write helpers for sub-pages. */
function usePersistedTheme() {
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem(THEME_KEY) || 'press'; } catch (e) { return 'press'; }
  });
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }, [theme]);
  return [theme, setTheme];
}

function usePersistedPhoto() {
  const [pt, setPt] = React.useState(() => {
    try { return localStorage.getItem(PHOTO_KEY) || 'color'; } catch (e) { return 'color'; }
  });
  React.useEffect(() => {
    try { localStorage.setItem(PHOTO_KEY, pt); } catch (e) {}
  }, [pt]);
  return [pt, setPt];
}

Object.assign(window, {
  SharedHeader,
  SharedFooter,
  MiniTweaks,
  usePersistedTheme,
  usePersistedPhoto,
});
