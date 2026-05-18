/* contact page */

const D = window.SITE_DATA;

function PageHero() {
  return (
    <section className="page-hero" data-screen-label="Page Hero">
      <div className="container">
        <div className="eyebrow">Contact</div>
        <h1 className="display">Let's <em>talk.</em></h1>
        <p className="lede">
          I welcome inquiries from collaborators, prospective doctoral students,
          journalists, and policymakers.
        </p>
      </div>
    </section>
  );
}

function ContactBody({ photoTreatment }) {
  return (
    <section data-screen-label="Contact Body">
      <div className="container">
        <div className="contact-layout">
          <div className="primary">
            <p>
              For research collaborations, advising inquiries, talks and
              interviews, the best way to reach me is by email.
            </p>
            <a className="email-row" href={`mailto:${D.email}`}>{D.email} →</a>
            <div className="addr">
              School of Public Affairs<br />
              Arizona State University<br />
              411 N. Central Avenue, Suite 445<br />
              Phoenix, AZ 85004 · USA
            </div>
          </div>
          <div className="links">
            <div className="contact-photo" data-treatment={photoTreatment}>
              <img src="assets/yushim-desk.jpg" alt="Yushim Kim at her office desk" />
            </div>
            <div className="contact-photo-caption">
              ASU School of Public Affairs · Phoenix, AZ
            </div>
            <h4>Elsewhere</h4>
            <ul>
              <li><a href={D.links.asu} target="_blank" rel="noopener">
                ASU Faculty Profile<span className="arrow">↗</span>
              </a></li>
              <li><a href={D.links.scholar} target="_blank" rel="noopener">
                Google Scholar<span className="arrow">↗</span>
              </a></li>
              <li><a href="publications.html">
                Publications<span className="arrow">→</span>
              </a></li>
              <li><a href="about.html">
                Full bio<span className="arrow">→</span>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactApp() {
  const [theme, setTheme] = usePersistedTheme();
  const [photo, setPhoto] = usePersistedPhoto();
  return (
    <div className="page">
      <SharedHeader activePage="contact" />
      <PageHero />
      <ContactBody photoTreatment={photo} />
      <SharedFooter />
      <MiniTweaks theme={theme} setTheme={setTheme} includePhoto={true}
                  photoTreatment={photo} setPhotoTreatment={setPhoto} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContactApp />);
