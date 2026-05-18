/* about page */

const D = window.SITE_DATA;

function PageHero() {
  return (
    <section className="page-hero" data-screen-label="Page Hero">
      <div className="container">
        <div className="eyebrow">About</div>
        <h1 className="display">A scholar at the intersection<br />of <em>policy</em> and <em>complexity.</em></h1>
        <p className="lede">
          Yushim Kim is a Professor in the School of Public Affairs at Arizona State
          University, where she has been on faculty since 2007.
        </p>
      </div>
    </section>
  );
}

function LongBio({ photoTreatment }) {
  return (
    <section data-screen-label="Long Bio">
      <div className="container">
        <div className="bio-prose">
          <div className="text">
            {D.longBio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="side">
            <div className="photo" data-treatment={photoTreatment}>
              <img src="assets/yushim.jpg" alt="Yushim Kim" />
            </div>
            <div className="caption">
              Yushim Kim · Phoenix, Arizona<br />
              Photo by Arizona State University
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Appointments() {
  return (
    <section data-screen-label="Appointments">
      <div className="container">
        <div className="section-head">
          <h2>Appointments</h2>
          <div className="meta">Academic positions</div>
        </div>
        <div className="kv-list">
          {D.appointments.map((a, i) => (
            <div className="kv-row" key={i}>
              <div className="k">{a.years}</div>
              <div className="v">
                <div className="role">{a.role}</div>
                <div className="org">{a.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section data-screen-label="Education">
      <div className="container">
        <div className="section-head">
          <h2>Education</h2>
        </div>
        <div className="kv-list">
          {D.education.map((e, i) => (
            <div className="kv-row" key={i}>
              <div className="k">{e.year}</div>
              <div className="v">
                <div className="role">{e.degree}</div>
                <div className="org">{e.school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section data-screen-label="Awards">
      <div className="container">
        <div className="section-head">
          <h2>Awards & honors</h2>
          <div className="meta">{D.awards.length} selected</div>
        </div>
        <div className="kv-list">
          {D.awards.map((a, i) => (
            <div className="kv-row" key={i}>
              <div className="k">{a.year}</div>
              <div className="v">
                <div className="role">{a.name}</div>
                <div className="org">{a.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoBreak({ photoTreatment }) {
  return (
    <section className="photo-break" data-treatment={photoTreatment} data-screen-label="Photo">
      <div className="container">
        <figure>
          <img src="assets/yushim-collab.jpg" alt="Yushim Kim in a research discussion" />
        </figure>
        <figcaption>
          <span className="lbl">In conversation</span>
          <span>
            With collaborators and doctoral students, Phoenix. Kim's research is built
            on long‑running interdisciplinary partnerships across public affairs,
            geography, and computer science.
          </span>
        </figcaption>
      </div>
    </section>
  );
}

function AboutApp() {
  const [theme, setTheme] = usePersistedTheme();
  const [photo, setPhoto] = usePersistedPhoto();
  return (
    <div className="page">
      <SharedHeader activePage="about" />
      <PageHero />
      <LongBio photoTreatment={photo} />
      <PhotoBreak photoTreatment={photo} />
      <SharedFooter />
      <MiniTweaks theme={theme} setTheme={setTheme} includePhoto={true}
                  photoTreatment={photo} setPhotoTreatment={setPhoto} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutApp />);
