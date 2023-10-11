import React from 'react'
import { Cookies } from 'react-cookie';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const cookies = new Cookies();

class Contact extends React.Component {
  cookieConsentAccepted() {
    return getCookieConsentValue() === 'true';
  }

  contactMessageSent() {
    return cookies.get('contactMessageSent') || false;
  }

  renderForm() {
    return this.cookieConsentAccepted() && !this.contactMessageSent();
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const target = event.target;

    const data = {
      contactName: target.contactName.value,
      contactEmail: target.contactEmail.value,
      contactMessage: target.contactMessage.value,
    };
    //call to the Netlify Function you created
    fetch("./.netlify/functions/triggerContactEmail", {
      method: "POST",
      body: JSON.stringify({
        name: data.contactName,
        email: data.contactEmail,
        message: data.contactMessage,
      }),
    });

    cookies.set('contactMessageSent', new Date(), { path: '/' });

    target.contactFieldset.disabled = true;
    target.contactFieldset.style.opacity = 0.5;

    this.forceUpdate();
  };

  renderContactForm() {
    return (
      <div className="inner">
          <section>
              <form method="post" onSubmit={this.handleSubmit}>
                <fieldset name="contactFieldset">
                  <div className="field half first">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="contactName" id="name" required />
                  </div>
                  <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="contactEmail" id="email" required />
                  </div>
                  <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="contactMessage" rows="6" required ></textarea>
                  </div>
                  <ul className="actions">
                      <li><input type="submit" value="Send Message" className="special" /></li>
                      <li><input type="reset" value="Clear" /></li>
                  </ul>
                </fieldset>
              </form>
          </section>
          <section className="split">
              <section>
                  <div className="contact-method">
                      <span className="icon alt fa-envelope"></span>
                      <h3>Email</h3>
                      <a href="mailto:admin@laingsolutions.com">admin@laingsolutions.com</a>
                  </div>
              </section>
              <section>
                  <div className="contact-method">
                      <span className="icon alt fa-phone"></span>
                      <h3>Phone</h3>
                      <a href="tel:+447852410470">+44 7852 410 470</a>
                  </div>
              </section>
              <section>
                  <div className="contact-method">
                      <span className="icon alt fa-home"></span>
                      <h3>Address</h3>
                      <span>
                      London E5<br />
                      United Kingdom</span>
                  </div>
              </section>
          </section>
      </div>
    );
  }

  renderContactMessageSent() {
    const messageSentCookieValue = this.contactMessageSent();
    const messageSentDate = new Date(messageSentCookieValue);
    const messageSentTimeFormatted = messageSentDate.toLocaleTimeString(
      'en-GB',
      { hour: 'numeric', minute: 'numeric' }
    );
    const messageSentDateFormatted = messageSentDate.toLocaleDateString(
      'en-GB',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );

    return (
      <div>
        <h3>Message sent at {messageSentTimeFormatted} on {messageSentDateFormatted}</h3>
        <p>Thanks for contacting us, we will be in touch shortly.</p>
      </div>
    );
  }

  renderNoCookieConsent() {
    return (
      <h3>Please accept cookies to use the contact form.</h3>
    );
  }

  renderNoForm() {
    return (
      <div id="contact" className="inner">
        {this.cookieConsentAccepted() ? this.renderContactMessageSent() : this.renderNoCookieConsent()}
      </div>
    );
  }

  render() {
    return (
      <section id="contact">
        {this.renderForm() ? this.renderContactForm() : this.renderNoForm()}
      </section>
    );
  }
}

export default Contact
