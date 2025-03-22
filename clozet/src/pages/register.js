import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth,  db} from '../components/firebaseconfig/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import './register.css'
import { Link } from 'react-router-dom';


function RegisterPage() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
  e.preventDefault();

  try{
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    console.log(user)
    if(user){
      await setDoc(doc(db,"Register", user.uid),{
       firstName: fname,
       lastName:lname,
       email:user.email,

        
      });
    }
    console.log('User Register Succesfully!');
    toast.success("User Register Succesfully!",{
      position:"top-center"
    })
  }
  catch(error){
    console.log(error.message);
     toast.success(error.message,{
      position:"bottom-center",
  })

    
  }
  }

  return (
    <>
    <div  className='container'>
      <div className='form-section'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
      <input type='text' value={fname} onChange={(e)=>setFname(e.target.value)} placeholder='First Name'/>
      <input type='text' value={lname} onChange={(e)=>setLname(e.target.value)} placeholder='Last Name'/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type='submit' >Register</button>
      <p>Already registered <Link to='/login'>login</Link></p>
      </form>
      </div>
     
    </div>
    </>
  );
}

export default RegisterPage;
