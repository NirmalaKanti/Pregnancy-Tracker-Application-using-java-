import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/Cover.css';

const ContactUs = () => {
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send form data to server)
    
    setNotification('Message sent successfully!');
    // Clear the form after submission
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className='contactus-container'>
        <h1>Contact Us</h1>
        <p>Reach out with any questions and comments</p>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='nameclass'>
            <label className='label' htmlFor='first-name'>First Name</label>
            <input type="text" id='first-name' name='first-name' className='input' required />

            <label className='label' htmlFor='last-name'>Last Name</label>
            <input type="text" id='last-name' name='last-name' className='input' required />
          </div>

          <label className='label' htmlFor='email'>Email</label>
          <input type="email" id='email' name='email' className='input' required />

          <label className='label' htmlFor='phone'>Phone</label>
          <input type="tel" id='phone' name='phone' className='input' required />

          <label className='label' htmlFor='message'>Message</label>
          <textarea id='message' name='message' rows="6" placeholder='Type your message here' className='textarea' required></textarea>
          
          <button type='submit' className='btn'>Submit</button>
        </form>
        {notification && <div className='notification'>{notification}</div>}
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
