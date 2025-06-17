import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import '../STYLE/contact.css';

const Contact = () => {
  const HandleSendmsg=()=>{
toast.success("Thanks For Connecting.")
  }
  return (
    <>
    <div className="contact-page">
      <section className="contact-form-section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" onClick={HandleSendmsg}>Send Message</button>
        </form>
      </section>

      
    </div>
   <ToastContainer style={{zIndex:200}} position="top-right"
     autoClose={2000} theme="dark" pauseOnHover={false}/>
     
    </>
  );
};

export default Contact;
