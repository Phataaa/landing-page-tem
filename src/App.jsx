import React, { useState } from "react";
import "./App.css";

const services = [
  {
    number: "01",
    title: "Pre-trip inspections",
    description:
      "Get key caravan systems checked before you head away for the Christmas and summer holidays.",
    icon: "✓",
  },
  {
    number: "02",
    title: "Mechanical repairs",
    description:
      "Keep your caravan road-ready with professional attention to mechanical concerns.",
    icon: "⚙",
  },
  {
    number: "03",
    title: "Electrical checks",
    description:
      "Have your caravan's electrical systems and battery setup checked before travelling.",
    icon: "ϟ",
  },
  {
    number: "04",
    title: "General servicing",
    description:
      "Plan routine maintenance and address issues before they interrupt your holiday.",
    icon: "✳",
  },
];

const benefits = [
  ["Local Gold Coast team", "Convenient workshop locations for local caravan owners."],
  ["Experienced specialists", "A team focused on caravan repairs, servicing and maintenance."],
  ["A clear next step", "Talk with the team about your caravan and the work it may need."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const location = formData.get("location") || "No preference";
    const message = formData.get("message") || "No additional details";

    const subject = `Christmas Road-Ready enquiry — ${name}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Preferred workshop: ${location}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:info@carafix.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        GET YOUR CARAVAN READY FOR THE SUMMER HOLIDAYS
        <a href="#contact">ENQUIRE TODAY <span aria-hidden="true">↗</span></a>
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label="Carafix home">
          <img
            className="brand-logo"
            src="https://cdn-ilemoeo.nitrocdn.com/PWKJhCEnlsDSDjsmqGIFnbHGsliWzVoo/assets/images/optimized/rev-166cebf/carafix.com.au/wp-content/uploads/2021/07/Primary-Black-Orange-1536x283.png"
            alt="Carafix"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#why-carafix" onClick={() => setMenuOpen(false)}>Why Carafix</a>
          <a href="#locations" onClick={() => setMenuOpen(false)}>Locations</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Request a quote <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow light"><span /> CHRISTMAS • SUMMER • ADVENTURE</div>
            <h1>Make room<br />for <em>more</em> holiday.</h1>
            <p className="hero-copy">
              Make sure your caravan is ready for the road.
              Get in touch with Carafix before your next summer adventure.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#contact">Enquire now <span>↗</span></a>
              <a className="text-link light-link" href="#services">Explore our services <span>↓</span></a>
            </div>
            <div className="hero-note">
              <span className="sun-icon">☼</span>
              <span>GOOD TIMES START WITH A ROAD-READY CARAVAN.</span>
            </div>
          </div>
          <div className="hero-side-label">GOLD COAST · QUEENSLAND</div>
          <div className="hero-bottom">
            <span>YOUR NEXT ADVENTURE STARTS HERE</span>
            <span>01 / 04</span>
          </div>
        </section>

        <section className="intro section-pad">
          <div className="intro-kicker">THE HOLIDAY SEASON IS CALLING</div>
          <div className="intro-grid">
            <h2>More exploring.<br /><em>Less worrying.</em></h2>
            <div className="intro-text">
              <p>
                Christmas is a time for getting together, hitting the road and
                making memories. Before you set off, give your caravan the
                attention it deserves.
              </p>
              <p>
                From general servicing to repairs, the Carafix team can help
                you discuss what your caravan needs before your next trip.
              </p>
              <a className="text-link dark-link" href="#contact">Talk to our team <span>↗</span></a>
            </div>
          </div>
          <div className="intro-stamp">
            <span>SUMMER</span>
            <strong>’26</strong>
            <span>ROAD READY</span>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> PREPARE FOR THE JOURNEY</div>
              <h2>Ready for the<br /><em>road ahead.</em></h2>
            </div>
            <p>
              A little preparation can make a big difference.
              Talk to Carafix about the right servicing or repairs for your caravan.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Enquire about ${service.title}`}>↗</a>
              </article>
            ))}
          </div>
          <div className="service-disclaimer">
            Service availability and inspection scope are subject to confirmation by Carafix.
          </div>
        </section>

        <section className="feature">
          <div className="feature-photo" role="img" aria-label="Exterior of the real Carafix Arundel workshop" />
          <div className="feature-content">
            <div className="eyebrow light"><span /> YOUR HOLIDAY, YOUR WAY</div>
            <h2>Take the scenic<br /><em>route.</em></h2>
            <p>
              Whether you're planning a coastal escape or a longer family road
              trip, start with a conversation about your caravan's needs.
            </p>
            <a className="button button-cream" href="#contact">Plan your next step <span>↗</span></a>
            <div className="feature-scribble">LET'S<br />GO!</div>
          </div>
        </section>

        <section className="why section-pad" id="why-carafix">
          <div className="why-heading">
            <div className="eyebrow"><span /> THE CARAFIX DIFFERENCE</div>
            <h2>Good people.<br /><em>Expert care.</em></h2>
            <p>
              Choosing someone to look after your caravan matters.
              Get in touch with the Carafix team to discuss your repair or
              servicing requirements.
            </p>
          </div>
          <div className="benefit-list">
            {benefits.map(([title, description], index) => (
              <div className="benefit" key={title}>
                <span className="benefit-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="benefit-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="locations section-pad" id="locations">
          <div className="location-heading">
            <div className="eyebrow light"><span /> FIND YOUR LOCAL WORKSHOP</div>
            <h2>Here for your<br /><em>next adventure.</em></h2>
          </div>
          <div className="location-cards">
            <article className="location-card">
              <span className="location-label">LOCATION 01</span>
              <img className="location-photo" src="/Carafix-Arundel.jpg" alt="Carafix Arundel workshop" />
              <h3>Arundel</h3>
              <p>15 Technology Drive<br />Arundel, QLD</p>
              <a className="location-phone" href="tel:0755715018">(07) 5571 5018</a>
              <a href="https://www.google.com/maps/search/?api=1&query=15+Technology+Drive+Arundel+QLD+Australia" target="_blank" rel="noreferrer">
                Get directions ↗
              </a>
            </article>
            <article className="location-card">
              <span className="location-label">LOCATION 02</span>
              <img className="location-photo" src="/Carafix-Currumbin.png" alt="Carafix Currumbin workshop" />
              <h3>Currumbin</h3>
              <p>9 Wheeler Crescent<br />Currumbin, QLD</p>
              <a className="location-phone" href="tel:0756481000">(07) 5648 1000</a>
              <a href="https://www.google.com/maps/search/?api=1&query=9+Wheeler+Crescent+Currumbin+QLD+Australia" target="_blank" rel="noreferrer">
                Get directions ↗
              </a>
            </article>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-copy">
            <div className="eyebrow"><span /> START YOUR HOLIDAY ON THE RIGHT NOTE</div>
            <h2>Let's get your<br /><em>caravan ready.</em></h2>
            <p>
              Tell us a little about what you need. The Carafix team can get
              back to you to discuss the next steps.
            </p>
            <div className="contact-aside">
              <span className="contact-star">✳</span>
              <span>CHRISTMAS ROAD-READY<br />SUMMER 2026</span>
            </div>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>YOUR NEXT STEP</span>
              <h3>Request an enquiry</h3>
            </div>
            {submitted ? (
              <div className="success-message" role="status">
                <span>✓</span>
                <h3>Your email enquiry is ready.</h3>
                <p>Your email app will open with the details filled in. Review the message and press send to deliver it to Carafix.</p>
                <button type="button" className="text-link dark-link" onClick={() => setSubmitted(false)}>Create another enquiry ↗</button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>Full name<input name="name" placeholder="Your name" required /></label>
                  <label>Phone number<input name="phone" type="tel" placeholder="Your phone" required /></label>
                </div>
                <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
                <label>What can we help with?
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option>Pre-trip inspection</option>
                    <option>Caravan servicing</option>
                    <option>Mechanical repairs</option>
                    <option>Electrical checks</option>
                    <option>Other enquiry</option>
                  </select>
                </label>
                <label>Preferred workshop
                  <select name="location" defaultValue="">
                    <option value="">No preference</option>
                    <option>Arundel</option>
                    <option>Currumbin</option>
                  </select>
                </label>
                <label>Anything else? <textarea name="message" rows="3" placeholder="Tell us about your caravan or enquiry..." /></label>
                <button className="button button-red form-submit" type="submit">Send enquiry <span>↗</span></button>
                <p className="form-small">Submitting this form will send your details to Carafix for follow-up. Your information will be kept confidential.</p>
              </>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home" aria-label="Back to Carafix home">
          <img
            className="brand-logo footer-logo"
            src="https://cdn-ilemoeo.nitrocdn.com/PWKJhCEnlsDSDjsmqGIFnbHGsliWzVoo/assets/images/optimized/rev-166cebf/carafix.com.au/wp-content/uploads/2021/07/Primary-Black-Orange-1536x283.png"
            alt="Carafix"
          />
        </a>
        <p>MAKE EVERY JOURNEY COUNT.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <small>© 2026 Carafix. Christmas campaign concept.</small>
      </footer>
    </div>
  );
}

export default App;
