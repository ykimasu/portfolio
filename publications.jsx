/* publications page */

const D = window.SITE_DATA;

function authorString(authors) {
  return authors.map((a, i) => (
    <React.Fragment key={i}>
      {i > 0 && ', '}
      <span className={a.startsWith('Kim, Y') ? 'me' : ''}>{a}</span>
    </React.Fragment>
  ));
}

function PageHero() {
  const articles = D.allPublications.filter((p) => p.type === 'article').length;
  const working = D.allPublications.filter((p) => p.type === 'working').length;
  return (
    <section className="page-hero" data-screen-label="Page Hero">
      <div className="container">
        <div className="eyebrow">Publications</div>
        <h1 className="display">
          {articles}+ peer‑reviewed articles,<br />
          <em>3 books</em>
        </h1>
        <p className="lede">
          A complete record of journal articles, books, conference proceedings, and
          working papers. Filter by topic to focus.
        </p>
      </div>
    </section>
  );
}

function BooksRow() {
  return (
    <section data-screen-label="Books">
      <div className="container">
        <div className="section-head">
          <h2>Books</h2>
          <div className="meta">2015 — 2026</div>
        </div>
        <div className="books">
          {D.books.map((b, i) => (
            <div className="book" key={i} data-accent={b.accent}>
              <div className="cover">
                <img src={b.cover} alt={`Cover of ${b.title}`} />
                <div className="spine"></div>
              </div>
              <div className="meta">
                <span className="booktitle">{b.title}</span>
                {b.subtitle && <div style={{ fontStyle: 'italic', marginBottom: 6 }}>{b.subtitle}</div>}
                <div>{b.authors}</div>
                <div style={{ marginTop: 4 }}><span className="pubname">{b.publisher}</span> · {b.role} · {b.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TAGS = ['All', 'Green space', 'Equity', 'Public health', 'GenAI', 'Computational'];

function PublicationsList() {
  const [tag, setTag] = React.useState('All');

  const filtered = D.allPublications.filter((p) => {
    if (tag !== 'All' && p.tag !== tag) return false;
    return true;
  });

  const countFor = (t) =>
    D.allPublications.filter((p) => (t === 'All' || p.tag === t)).length;

  return (
    <section data-screen-label="Publications List">
      <div className="container">
        <div className="section-head">
          <h2>All publications</h2>
          <div className="meta mono">{filtered.length} of {D.allPublications.length}</div>
        </div>

        <div className="filter-bar">
          <span className="label">Topic</span>
          {TAGS.map((t) => (
            <button key={t} className="chip" data-active={tag === t} onClick={() => setTag(t)}>
              {t}<span className="count">{countFor(t)}</span>
            </button>
          ))}
        </div>

        <div className="pubs-chrono">
          {filtered.length === 0 && (
            <div style={{ padding: '40px 0', color: 'var(--ink-faint)' }}>
              No publications match this filter combination.
            </div>
          )}
          {filtered.map((p, i) => (
            <div className="pub" key={i}>
              <div className="year mono">{p.year}</div>
              <div>
                <div className="title">
                  {p.title}
                  <span className="tag">{p.tag}</span>
                </div>
                <div className="authors">{authorString(p.authors)}</div>
                {p.venue && <div className="venue" style={{ fontSize: 13, marginTop: 2 }}>{p.venue}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchThemes() {
  return (
    <section data-screen-label="Research">
      <div className="container">
        <div className="section-head">
          <h2>Research themes</h2>
          <div className="meta">{String(D.themes.length).padStart(2, '0')} / themes</div>
        </div>
        <div className="themes-cards">
          {D.themes.map((t) => (
            <div className="card" key={t.n}>
              <div className="idx">{t.n} / RESEARCH</div>
              <h3 className="serif">{t.title}</h3>
              <p>{t.blurb}</p>
              <div className="keywords">
                {t.kw.map((k) => <span key={k}>{k}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PublicationsApp() {
  const [theme, setTheme] = usePersistedTheme();
  return (
    <div className="page">
      <SharedHeader activePage="publications" />
      <PageHero />
      <BooksRow />
      <ResearchThemes />
      <PublicationsList />
      <SharedFooter />
      <MiniTweaks theme={theme} setTheme={setTheme} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PublicationsApp />);
