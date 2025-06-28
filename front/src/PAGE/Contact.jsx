import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import '../STYLE/contact.css';

const Contact = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const HandleSendmsg=async(e)=>{
    e.preventDefault()
    if (!email.includes('@')) {
      toast.error('Email Is Required')
      return;
    }
       const response = await fetch('https://sarbazcvbackend.vercel.app/bin/contact', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({ name:username, email:email,messege:message })
           });
           if (response.status==201) {
             toast.success("Thanks For Connecting.")
           }
           if (!response.ok) {
               const errorData = await response.json();
               toast.error(errorData.message)
               
              }
    setEmail("")
    setMessage("")
    setUsername("")
  }
  return (
    <>
    <div className="contact-page">
      <section className="contact-form-section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name"  value={username} required onChange={(e)=>setUsername(e.target.value)} />
          <input type="email" name="email" placeholder="Your Email" value={email} required onChange={(e)=>setEmail(e.target.value)}  />
          <textarea name="message" rows="5" placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
          <button  onClick={(e)=>HandleSendmsg(e)}>Send Message</button>
        </form>
      </section>

      
    </div>
   <ToastContainer style={{zIndex:200}} position="top-right"
     autoClose={2000} theme="dark" pauseOnHover={false}/>
     
    </>
  );
};

export default Contact;
