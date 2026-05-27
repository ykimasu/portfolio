/* Yushim Kim — homepage app */

const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "layout": "editorial",
  "theme": "press",
  "themesStyle": "cards",
  "pubsStyle": "chronological",
  "photoTreatment": "color"
} /*EDITMODE-END*/;

const D = window.SITE_DATA;

/* ── Header ─────────────────────────────────────────────────────── */
/* Now lives in shared.jsx as SharedHeader. */

/* ── HERO variants ──────────────────────────────────────────────── */
function HeroEditorial({ photoTreatment }) {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="container hero-editorial">
        <div className="hero-copy">
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            Arizona State University · School of Public Affairs
          </div>
          <h1 className="display">
            Working at the crossroads of<br />
            <em>policy and management</em><br />
            and the <em>cities, environments,</em><br />
            and <em style={{ fontFamily: "Cormorant Garamond" }}>technologies</em> they shape.
          </h1>
          <p className="hero-tag">Two decades of research at the seam between public policy, urban environmental issues, and the computational methods that make complex urban systems legible.



          </p>
          <div className="hero-meta">
            <div className="row"><span className="k">Role</span><span>Professor, School of Public Affairs</span></div>
            <div className="row"><span className="k">Methods</span><span>Agent‑based modeling · spatial analysis · LLMs · networks</span></div>
            <div className="row"><span className="k">Based in</span><span>Phoenix, Arizona</span></div>
            <div className="row">
              <span className="k">Overview</span>
              <span>
                <a
                  className="hero-meta-link"
                  href="https://ykimasu.github.io/pitchdeck/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Research pitch deck&nbsp;↗
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="hero-photo" data-treatment={photoTreatment}>
          <img src="assets/yushim.jpg" alt="Yushim Kim" />
          <div className="hero-photo-caption">
            <span className="lbl">Phoenix · 2026</span>
            <span className="rule" aria-hidden="true"></span>
            <span>Photo · Arizona State University</span>
          </div>
        </div>
      </div>
    </section>);

}

function HeroIndex({ photoTreatment }) {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="container hero-index">
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          № 001 · Yushim Kim · Phoenix · 2026 ↗
        </div>
        <h1 className="name">Yushim<br />Kim<span style={{ color: 'var(--accent)' }}>.</span></h1>
        <div className="index-grid">
          <div className="photo-thumb" data-treatment={photoTreatment}>
            <img src="assets/yushim.jpg" alt="Yushim Kim" />
          </div>
          <div className="col">
            <h4>Position</h4>
            <p>
              Professor, School of Public Affairs,<br />
              Arizona State University
            </p>
            <h4 style={{ marginTop: 22 }}>Fields</h4>
            <p>Public policy & management · environmental justice · computational social science · public health emergencies</p>
          </div>
          <div className="col">
            <h4>Books</h4>
            <ul>
              <li>Computational Approaches to Policy Challenges (2026)</li>
              <li>Green Gentrification & Environmental Justice (2024)</li>
              <li>Rethinking Environmental Justice in Sustainable Cities (2015)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>);

}

function HeroSplit({ photoTreatment }) {
  return (
    <section className="hero" style={{ padding: 0 }} data-screen-label="Hero">
      <div className="container">
        <div className="hero-split">
          <div className="left">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              Arizona State University
            </div>
            <h1>Yushim Kim</h1>
            <div className="role">Professor · School of Public Affairs</div>
            <p className="tag">
              Studying urban environmental justice, green space equity, and
              computational approaches to governance — at the intersection of
              policy and complexity.
            </p>
          </div>
          <div className="right">
            <div className="photo-frame" data-treatment={photoTreatment}>
              <img src="assets/yushim.jpg" alt="Yushim Kim" />
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Hero({ layout, photoTreatment }) {
  if (layout === 'index') return <HeroIndex photoTreatment={photoTreatment} />;
  if (layout === 'split') return <HeroSplit photoTreatment={photoTreatment} />;
  return <HeroEditorial photoTreatment={photoTreatment} />;
}

/* ── Bio ─────────────────────────────────────────────────────────── */
function Bio() {
  return (
    <section data-screen-label="Bio">
      <div className="container">
        <div className="bio-grid">
          <div className="label eyebrow">About</div>
          <div>
            <p>
              {D.shortBio}
            </p>
            <a href="about.html" className="more">Read the full bio →</a>
          </div>
        </div>
      </div>
    </section>);

}

/* ── Research themes (3 variants) ───────────────────────────────── */
function ThemesCards() {
  return (
    <div className="themes-cards">
      {D.themes.map((t) =>
      <div className="card" key={t.n}>
          <div className="idx">{t.n} / RESEARCH</div>
          <h3 className="serif">{t.title}</h3>
          <p>{t.blurb}</p>
          <div className="keywords">
            {t.kw.map((k) => <span key={k}>{k}</span>)}
          </div>
        </div>
      )}
    </div>);

}

function ThemesProse() {
  return (
    <div className="themes-prose">
      {D.themes.map((t) =>
      <div className="item" key={t.n}>
          <div className="meta">
            <span className="mono" style={{ fontSize: 12, color: 'var(--ink-faint)' }}>{t.n}</span>
            <span className="eyebrow" style={{ marginBottom: 0 }}>{t.kw[0]}</span>
          </div>
          <h3 className="serif">{t.title}</h3>
          <p>{t.blurb}</p>
        </div>
      )}
    </div>);

}

function ThemesList() {
  return (
    <div className="themes-list">
      {D.themes.map((t) =>
      <div className="row" key={t.n}>
          <div className="num">{t.n}</div>
          <h3 className="serif">{t.title}</h3>
          <p>{t.blurb}</p>
          <div className="tag-cluster">{t.kw.slice(0, 2).join(' · ')}</div>
        </div>
      )}
    </div>);

}

function ResearchSection({ themesStyle }) {
  return (
    <section data-screen-label="Research">
      <div className="container">
        <div className="section-head">
          <h2>Research <em style={{ color: 'var(--ink-faint)' }}>— four threads.</em></h2>
          <div className="meta">04 / themes</div>
        </div>
        {themesStyle === 'prose' && <ThemesProse />}
        {themesStyle === 'list' && <ThemesList />}
        {themesStyle === 'cards' && <ThemesCards />}
      </div>
    </section>);

}

/* ── Featured Publications (3 variants) ─────────────────────────── */
function authorString(authors) {
  return authors.map((a, i) =>
  <React.Fragment key={i}>
      {i > 0 && ', '}
      <span className={a.startsWith('Kim, Y') ? 'me' : ''}>{a}</span>
    </React.Fragment>
  );
}

function PubsChronological({ items }) {
  return (
    <div className="pubs-chrono">
      {items.map((p, i) =>
      <div className="pub" key={i}>
          <div className="year mono">{p.year}</div>
          <div>
            <div className="title">
              {p.title}
              <span className="tag">{p.tag}</span>
            </div>
            <div className="authors">{authorString(p.authors)}</div>
            <div className="venue" style={{ fontSize: 13, marginTop: 2 }}>{p.venue}</div>
          </div>
        </div>
      )}
    </div>);

}

function PubsGrouped({ items }) {
  const groups = {};
  items.forEach((p) => {
    if (!groups[p.tag]) groups[p.tag] = [];
    groups[p.tag].push(p);
  });
  return (
    <div className="pubs-grouped">
      {Object.entries(groups).map(([tag, items]) =>
      <div className="group" key={tag}>
          <h3>{tag}</h3>
          {items.map((p, i) =>
        <div className="pub" key={i}>
              <div className="title">{p.title}</div>
              <div className="meta">
                {authorString(p.authors)} · <span style={{ fontStyle: 'italic' }}>{p.venue}</span>, {p.year}
              </div>
            </div>
        )}
        </div>
      )}
    </div>);

}

function PubsFeatured({ items }) {
  const top = items.slice(0, 4);
  return (
    <div className="pubs-featured">
      {top.map((p, i) =>
      <div className="pub-card" key={i}>
          <span className="badge">{p.tag} · {p.year}</span>
          <div className="title">{p.title}</div>
          <div className="venue">{p.venue}</div>
          <div className="authors">{authorString(p.authors)}</div>
        </div>
      )}
    </div>);

}

function PublicationsSection({ pubsStyle }) {
  const highlights = D.featuredPubs.slice(0, 2);
  return (
    <section data-screen-label="Publications">
      <div className="container">
        <div className="section-head">
          <h2>Selected publications</h2>
          <div className="meta">
            <a href="publications.html" className="link">view all 42 articles →</a>
          </div>
        </div>
        <div className="pub-spotlight">
          {highlights.map((p, i) =>
          <article className="pub-box" key={i}>
              <header className="pub-box-head">
                <span className="pub-box-num">{`№\u00A0${String(i + 1).padStart(2, '0')}`}</span>
                <span className="pub-box-year">{p.year}</span>
                <span className="pub-box-tag">{p.tag}</span>
              </header>
              <h3 className="pub-box-title">
                {p.url ?
              <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a> :
              p.title}
              </h3>
              <div className="pub-box-venue">{p.venue}</div>
              <p className="pub-box-abstract">{p.abstract}</p>
              <div className="pub-box-foot">
                <span className="pub-box-authors">{p.authors.join(' · ')}</span>
                {p.url &&
              <a className="pub-box-link" href={p.url} target="_blank" rel="noopener noreferrer">
                    Read on publisher&nbsp;↗
                  </a>
              }
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* ── Books ──────────────────────────────────────────────────────── */
function Books() {
  return (
    <section data-screen-label="Books">
      <div className="container">
        <div className="section-head">
          <h2>Books</h2>
          <div className="meta">03 / volumes</div>
        </div>
        <div className="books">
          {D.books.map((b, i) =>
          <div className="book" key={i} data-accent={b.accent}>
              <div className="cover">
                <img src={b.cover} alt={`Cover of ${b.title}`} />
                <div className="spine"></div>
              </div>
              <div className="meta">
                <span className="booktitle">{b.title}</span>
                {b.subtitle &&
              <div style={{ fontStyle: 'italic', marginBottom: 6 }}>
                    {b.subtitle}
                  </div>
              }
                <div>{b.authors}</div>
                <div style={{ marginTop: 4 }}>
                  <span className="pubname">{b.publisher}</span> · {b.role} · {b.year}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ── News ───────────────────────────────────────────────────────── */
function News() {
  return (
    <section data-screen-label="News">
      <div className="container">
        <div className="section-head">
          <h2>News & recent activity</h2>
          <div className="meta">
            <a href="news.html" className="link">archive →</a>
          </div>
        </div>
        <div className="news-list">
          {D.news.map((n, i) =>
          <div className="news-item" key={i}>
              <div className="date">{n.date}</div>
              <div className="text">{n.text}</div>
              <div className="kind">{n.kind}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ── Footer ─────────────────────────────────────────────────────── */
/* Now lives in shared.jsx as SharedFooter. */

/* ── Projects & Tools ───────────────────────────────────────────── */
function ProjectsSection() {
  const items = (D.projects || []);
  if (!items.length) return null;
  return (
    <section data-screen-label="Projects">
      <div className="container">
        <div className="section-head">
          <h2>Projects & tools</h2>
          <div className="meta">{String(items.length).padStart(2, '0')} / interactive</div>
        </div>
        <div className="projects-list">
          {items.map((p, i) => (
            <article className="project-row" key={i}>
              <a
                className="project-thumb"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.title}
              >
                {p.image
                  ? <img src={p.image} alt="" />
                  : <span className="project-thumb-empty">Add a screenshot</span>}
              </a>
              <div className="project-body">
                <div className="project-head">
                  <span className="project-num">{`№\u00A0${p.n}`}</span>
                  <span className="project-kind">{p.kind}</span>
                </div>
                <h3 className="project-title">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                </h3>
                <p className="project-blurb">{p.blurb}</p>
                <div className="project-foot">
                  <span className="project-meta">{p.meta}</span>
                  <a className="project-cta" href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.cta || 'Visit'}&nbsp;↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tweaks Panel ───────────────────────────────────────────────── */
function Tweaks({ t, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection label="Layout" />
      <TweakSelect
        label="Hero layout"
        value={t.layout}
        options={[
        { value: 'editorial', label: 'Editorial' },
        { value: 'index', label: 'Index card' },
        { value: 'split', label: 'Split / portrait' }]
        }
        onChange={(v) => setTweak('layout', v)} />
      
      <TweakRadio
        label="Photo"
        value={t.photoTreatment}
        options={[
        { value: 'color', label: 'Color' },
        { value: 'duotone', label: 'Duotone' }]
        }
        onChange={(v) => setTweak('photoTreatment', v)} />
      

      <TweakSection label="Color theme" />
      <TweakRadio
        label="Theme"
        value={t.theme}
        options={[
        { value: 'press', label: 'Press' },
        { value: 'cool', label: 'Cool' },
        { value: 'warm', label: 'Warm' }]
        }
        onChange={(v) => setTweak('theme', v)} />
      
      <TweakRadio
        label="Alt"
        value={t.theme}
        options={[
        { value: 'earth', label: 'Earth' },
        { value: 'mono', label: 'Mono' }]
        }
        onChange={(v) => setTweak('theme', v)} />
      

      <TweakSection label="Research themes" />
      <TweakSelect
        label="Style"
        value={t.themesStyle}
        options={[
        { value: 'cards', label: 'Cards grid' },
        { value: 'prose', label: 'Prose stack' },
        { value: 'list', label: 'Index list' }]
        }
        onChange={(v) => setTweak('themesStyle', v)} />
      

      <TweakSection label="Publications" />
      <TweakSelect
        label="Layout"
        value={t.pubsStyle}
        options={[
        { value: 'chronological', label: 'Chronological list' },
        { value: 'grouped', label: 'Grouped by topic' },
        { value: 'featured', label: 'Featured cards (top 4)' }]
        }
        onChange={(v) => setTweak('pubsStyle', v)} />
      
    </TweaksPanel>);

}

/* ── Root ───────────────────────────────────────────────────────── */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme);
    try {localStorage.setItem('ykim.theme', t.theme);} catch (e) {}
  }, [t.theme]);
  useEffect(() => {
    try {localStorage.setItem('ykim.photoTreatment', t.photoTreatment);} catch (e) {}
  }, [t.photoTreatment]);

  return (
    <div className="page">
      <SharedHeader activePage="home" />
      <Hero layout={t.layout} photoTreatment={t.photoTreatment} />
      <PublicationsSection pubsStyle={t.pubsStyle} />
      <ProjectsSection />
      <SharedFooter />
      <Tweaks t={t} setTweak={setTweak} />
    </div>);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);