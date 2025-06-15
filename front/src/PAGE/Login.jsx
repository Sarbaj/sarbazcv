import React, { useState } from 'react'
import '../STYLE/login.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Login = () => {
      const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    async function Sendlogin(email, password) {
    try {
        const response = await fetch('https://sarbazcvbackend.vercel.app/bin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            toast.error(errorData.message)
            throw new Error(errorData.message || 'Login failed');
            
        }

        const data = await response.json();

        // Store the token in sessionStorage
        localStorage.setItem('authToken', data.token);

        // Redirect to the main page
        window.location.href = '/addproject'; // Change this to your main page URL

    } catch (error) {
        console.error('Error during login:', error);
       
    }
}

  return (
     <>
     
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={()=>Sendlogin(email,password)}>Log In</button>

        
      </div>
      
    </div>
<ToastContainer position="top-center"
     autoClose={2000} theme="dark" pauseOnHover={false}/>
     </>
  )
}

export default Login
