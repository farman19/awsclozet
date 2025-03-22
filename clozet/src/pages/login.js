import React, { useState } from 'react';
import './login.css'
import { signInWithEmailAndPassword,  } from 'firebase/auth';
import { auth } from '../components/firebaseconfig/firebase';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
     e.preventDefault();
     try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      window.location.href = "/"
      toast.success("User logged in succcessfully",{
        position: "top-center",
      })
     }
     catch(error){
       console.log(error.message);
       toast.error(error.message,{
        position:"bottom-center",
       })
     }
  };

  return (
    <>
    <div className='container'>
      <div className='login-section'>
        <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type='submit'>Login</button>
      <p>New user <Link to={'/register'}>Register Here</Link></p>
      </form>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
