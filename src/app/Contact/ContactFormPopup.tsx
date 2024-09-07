"use client";
import React, { useState } from 'react';
import styles from './ContactFormPopup.module.scss';
import Popup from '../../../components/Popup'; // Import the Popup component

interface ContactFormPopupProps {
  onClose: () => void;
}

const ContactFormPopup: React.FC<ContactFormPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // For showing the spinner
  const [popup, setPopup] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setPopup({ message: 'Message sent successfully!', type: 'success' });
      } else {
        setPopup({ message: 'Failed to send message.', type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setPopup({ message: 'An error occurred. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setPopup(null); // Close the popup
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.leftSection}>
          <img src="/img/Aboutme2.jpg" alt="Dr. Roger Härtl" />
        </div>
        <div className={styles.rightSection}>
          <button className={styles.closeButton} onClick={onClose}>X</button>
          <h2><b>Contact Dr. Roger Härtl</b></h2>
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
              {loading ? 'Sending ...' : 'Send Message'}
            </button>
          </form>
          {popup && (
            <Popup message={popup.message} type={popup.type} onClose={handleClosePopup} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactFormPopup;
