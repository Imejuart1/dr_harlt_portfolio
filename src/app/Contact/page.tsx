"use client"
import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Popup from '../../../components/Popup'; // Import the Popup component
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [currentMapIndex, setCurrentMapIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!executeRecaptcha) {
    setPopup({ message: "Captcha not ready", type: "error" });
    return;
  }

  const captchaToken = await executeRecaptcha("contact_form");

  setLoading(true);

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        captchaToken,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setPopup({ message: 'Message sent successfully!', type: 'success' });
    } else {
      setPopup({ message: 'Failed to send message.', type: 'error' });
    }

  } catch {
    setPopup({ message: 'An error occurred.', type: 'error' });
  } finally {
    setLoading(false);
  }
};


  const handleClosePopup = () => {
    setPopup(null); 
  };

  const maps = [
    {
      title: 'Primary Office Map',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.759965967281!2d-73.964666!3d40.76056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e67073cb37%3A0x88f28a806c367f69!2s240%20E%2059th%20St%202nd%20floor%2C%20New%20York%2C%20NY%2010022%2C%20USA!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus',
    },
    {
      title: 'Wednesday Office Map',
      src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.323245656502!2d-73.99893848459513!3d40.75468177932708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ad82d83569%3A0x1f7cf03bb6a8b264!2s504%20W%2035th%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1699928479398!5m2!1sen!2sus",
    },
  ];
  const handleNextMap = () => {
    setCurrentMapIndex((prevIndex) => (prevIndex + 1) % maps.length);
  };

  const handlePrevMap = () => {
    setCurrentMapIndex((prevIndex) => (prevIndex - 1 + maps.length) % maps.length);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.heroSection}>
        <div className={styles.contactContent}>
          <h1>Contact</h1>
          <h1>Dr. Roger Härtl</h1>
          <p>Och Spine at NewYork-Presbyterian at the Weill Cornell Medicine Center for Comprehensive Spine Care</p>

          
          <div className={styles.mapControls}>
            <button onClick={handlePrevMap} className={styles.arrowButton}>
              &#8592; {/* Left Arrow */}
            </button>
            <p>{maps[currentMapIndex].title}</p>
            <button onClick={handleNextMap} className={styles.arrowButton}>
              &#8594; {/* Right Arrow */}
            </button>
          </div>
        </div>
          <div className={styles.mapContainer}>
            <iframe
              src={maps[currentMapIndex].src}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={maps[currentMapIndex].title}
            ></iframe>

        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.infoSection}>
          <div className={styles.address}>
            <h2>Office Location</h2>
            <div>
            <span><b>PRIMARY OFFICE:</b></span>
            <p>240 East 59th Street, 2nd Floor<br />New York, NY 10022</p>
            </div>
            <div>
            <span><b>ON WEDNESDAY:</b></span> 
            <p>504 W 35th St, New York, NY 10001, United States</p>
            </div>
            <p><strong>Phone:</strong> (212) 746-2152</p>
            <p><strong>Fax:</strong> (646) 962-0640</p>
          </div>
          <div className={styles.officeContacts}>
            <h2>Dr. Härtl&apos;s Office</h2>
            <p><strong>Appointment Scheduling:</strong> (Destiny Boliscar, Heidy Burmudez) - (212) 746-2152</p>
            <p><strong>Office Nurse Practitioner:</strong> (Ed Butler) - (212) 746-2152</p>
            <p><strong>Surgical Coordinator:</strong> (Nuribeel Gonzalez) - (212) 746-2152</p>
            <p><strong>Executive Assistant:</strong> (Erma Bell) - (212) 746-5138</p>
            <p><strong>Email:</strong>Dr. Härtl&apos;s office can always be reached by email at: <b>hartlspine@med.cornell.edu</b></p>
          </div>
        </div>
        <div className={styles.formSection}>
          <h2>Email Dr. Härtl</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton} disabled={loading}>
               {loading ? <span className={styles.spinner}></span> : 'Send Message'}
              </button>
          </form>
        </div>
      </div>

      {popup && (
        <Popup message={popup.message} type={popup.type} onClose={handleClosePopup} />
      )}
    </section>
  );
};

export default Contact;
