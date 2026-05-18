/* news page */

const D = window.SITE_DATA;

function PageHero() {
  return (
    <section className="page-hero" data-screen-label="Page Hero">
      <div className="container">
        <div className="eyebrow">News & updates</div>
        <h1 className="display">Recent <em>activity,</em><br />talks, and <em>milestones.</em></h1>
        <p className="lede">
          Books, awards, talks, and grants — chronologically. Most recent first.
        </p>
      </div>
    </section>
  );
}

function NewsArchive() {
  /* Group by year */
  const groups = {};
  D.news.forEach((n) => {
    const y = n.date;
    if (!groups[y]) groups[y] = [];
    groups[y].push(n);
  });
  const years = Object.keys(groups).sort((a, b) => b.localeCompare(a));

  return (
    <section data-screen-label="News Archive">
      <div className="container">
        <div className="news-archive">
          {years.map((y) => (
            <div className="year-block" key={y}>
              <div className="year-side">
                <div className="year-label">{y}</div>
                <div className="year-meta">
                  {groups[y].length} {groups[y].length === 1 ? 'update' : 'updates'}
                </div>
              </div>
              <div className="items">
                {groups[y].map((n, i) => (
                  <div className="item" key={i}>
                    <div className="kind-row">
                      <span className="kind">{n.kind}</span>
                      <span className="marker">№ {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="what">{n.text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsApp() {
  const [theme, setTheme] = usePersistedTheme();
  return (
    <div className="page">
      <SharedHeader activePage="news" />
      <PageHero />
      <NewsArchive />
      <SharedFooter />
      <MiniTweaks theme={theme} setTheme={setTheme} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NewsApp />);
