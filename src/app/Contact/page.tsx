import React from 'react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.heroSection}>
        <div className={styles.contactContent}>
          <h1>Contact</h1>
          <h1>Dr. Roger Härtl</h1>
          <p>Och Spine at NewYork-Presbyterian at the Weill Cornell Medicine Center for Comprehensive Spine Care</p>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.759965967281!2d-73.964666!3d40.76056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e67073cb37%3A0x88f28a806c367f69!2s240%20E%2059th%20St%202nd%20floor%2C%20New%20York%2C%20NY%2010022%2C%20USA!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.infoSection}>
          <div className={styles.address}>
            <h2>Office Location</h2>
            <p>240 East 59th Street, 2nd Floor<br />New York, NY 10022</p>
            <p><strong>Phone:</strong> (212) 746-2152</p>
            <p><strong>Fax:</strong> (646) 962-0640</p>
          </div>
          <div className={styles.officeContacts}>
            <h2>Dr. Härtl's Office</h2>
            <p><strong>Appointment Scheduling:</strong> (Destiny Boliscar, Heidy Burmudez) - (212) 746-2152</p>
            <p><strong>Office Nurse Practitioner:</strong> (Ed Butler) - (212) 746-2152</p>
            <p><strong>Surgical Coordinator:</strong> (Nuribeel Gonzalez) - (212) 746-2152</p>
            <p><strong>Executive Assistant:</strong> (Erma Bell) - (212) 746-5138</p>
          </div>
        </div>
        <div className={styles.formSection}>
          <h2>Email Dr. Härtl</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
