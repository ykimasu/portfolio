/* projects page */

const D = window.SITE_DATA;

function PageHero() {
  return (
    <section className="page-hero" data-screen-label="Page Hero">
      <div className="container">
        <div className="eyebrow">Projects Explained</div>
        <h1 className="display">What becomes <em>governable</em><br />when it becomes <em>measurable.</em></h1>
        <p className="lede">
          Two projects on how new data and new tools change what government can see, and what
          follows once it can.
        </p>
      </div>
    </section>
  );
}

const STATEMENT = [
  {
    n: '01',
    heading: 'What I study, and why',
    paras: [
      'Government has always been limited by what it could see cheaply. Administrative records, a census every ten years, and surveys with poor response rates are most of what decision-makers have had to work with, and policy tends to attend to what it can measure. This matters more than it might seem. When a problem goes unaddressed, we often assume that someone chose to ignore it, but the explanation is frequently simpler than that: nobody could see it in the first place. Neglect is not always ideological, and quite often it is epistemic.',
      'Green space quality is a clean example. Everyone agreed that quality mattered, since a park with broken equipment, no shade, and no maintenance does not deliver the health benefits that a well-maintained park does. But nobody could assess quality across an entire city without a budget that no city had, so policy worked with what it could count—the number of parks, the distance to them, and the acreage. That said, we measured access rather than quality.',
      'That constraint has been lifting. New data and new tools are making previously unobservable things observable at scale, and this changes what can be governed. The question I care about is what happens to a policy domain when a previously unmeasurable construct becomes cheaply measurable. Who gains standing to make claims? What gets funded that was not funded before? Which arguments become possible, and which become harder to dismiss?'
    ]
  },
  {
    n: '02',
    heading: 'Two projects, deliberately different',
    paras: [
      'The first project analyzes climate plans using large language models. Here the object is a document, and the model is reading reasoning—how a city justifies its choices, and whether equity is addressed substantively or only rhetorically. The validity question is interpretive: has the model understood the text the way a careful human reader would? Ground truth is itself a human judgment, and it is contestable.',
      'The second project assesses green space quality using multimodal models. Here the object is physical, and the model is perceiving a condition such as shade, upkeep, or amenities. The validity question is closer to classical measurement error: is the model systematically wrong in some contexts but not others? Ground truth is, in principle, verifiable by going and looking.',
      'These two projects are paired on purpose. A finding from either study alone would invite the same objection, that the result may be an artifact of how vision models behave, or a quirk of text analysis. Pairing them closes that door. If two studies with different data, different failure modes, and different standards of ground truth arrive at the same institutional conclusion, then the conclusion is about institutions rather than about models, which is why it should still hold when the models have been replaced.'
    ]
  },
  {
    n: '03',
    heading: 'The principle: match the tool to the decision',
    paras: [
      'Evidence from these tools is probabilistic, somewhat opaque, and hard to fully audit (Kim et al., 2026), and that character makes it well-suited to some uses and poorly suited to others.',
      'It fits screening, prioritization, hypothesis generation, and coverage, where the cost of being wrong is a wasted inspection or a second look, and where the honest alternative is not a better method but no method at all. An imperfect citywide park assessment is still better than no citywide assessment. It fits poorly, however, for individually consequential and rights-affecting decisions that are hard to reverse, where a person is entitled to know why, where the decision can be challenged, and where reason-giving is a legal requirement rather than a courtesy.',
      'The principle, then, is to match the evidentiary character of the tool to the reversibility of the decision. I should note that this has an obvious soft spot, which is that reversibility is much easier to claim than to verify. A tool that merely ranks parks for inspection is reversible in principle, but if staff almost never override the ranking, then the ranking has effectively become the decision. Whether and when that happens is an empirical question, and one that remains largely unanswered.'
    ]
  },
  {
    n: '04',
    heading: 'Why the public sector is different',
    paras: [
      'This is where public administration, management, and policy have something to say that the broader conversation about AI mostly misses. When a firm uses an opaque model that is wrong, say, eight percent of the time, that is a cost of doing business. When a city uses the same model, it faces reason-giving requirements, contestability, equal-treatment norms, and eventually a lawsuit. The instrument is the same, but it faces a categorically different bar in public use—not a demand for higher precision, but for a different kind of justification altogether.',
      "Our field has a long tradition on exactly this question, including administrative law on reason-giving, Simon's work on bounded rationality and decision-making under constraint, and the street-level bureaucracy literature on how discretion actually operates. That work was written about paper forms and caseloads, but I would argue it is the right tradition for this problem, and that the connection between AI and these traditions has to be made explicitly—not because it is intellectually tidy, but because government will be worse off without it.",
      'It is also worth observing that many governments appear to have this backwards. They are cautious and procurement-bound about low-stakes screening uses where the downside is trivial, while quietly absorbing far more consequential uses through vendor tools embedded in case management, benefits eligibility, and risk assessment, where no one ever made an explicit adoption decision at all. The tool simply arrived inside a software contract. The problem is not caution versus recklessness so much as caution applied at the wrong end.'
    ]
  },
  {
    n: '05',
    heading: 'Where this is going',
    paras: [
      'My long-term goal is to develop the evaluative framework and the institutional argument surrounding new data and tools in government, in the hope that the work outlasts any particular model. I welcome any intellectual conversations about this proposition.'
    ]
  }
];

function Statement() {
  return (
    <section className="statement" data-screen-label="Statement">
      <div className="container">
        {STATEMENT.map((s) => (
          <div className="statement-block" key={s.n}>
            <div className="statement-side">
              <div className="statement-num">№&nbsp;{s.n}</div>
              <h2 className="statement-heading">{s.heading}</h2>
            </div>
            <div className="statement-text">
              {s.paras.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Projects & Tools ───────────────────────────────────────────── */
function ProjectsList() {
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

function ProjectsApp() {
  const [theme, setTheme] = usePersistedTheme();
  return (
    <div className="page">
      <SharedHeader activePage="projects" />
      <PageHero />
      <Statement />
      <ProjectsList />
      <SharedFooter />
      <MiniTweaks theme={theme} setTheme={setTheme} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProjectsApp />);
