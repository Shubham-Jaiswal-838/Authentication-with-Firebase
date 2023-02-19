import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from 'firebase/auth';
import {auth} from "../firebaseConfig"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [send, setSend] = useState(false);

  const navigate = useNavigate();

//   console.log(auth.userCredential);

  useEffect(() =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    // console.log(user.email);
    navigate("/signin");
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });

  }, [send]);

  const handleClick = (e) =>{
    e.preventDefault();
    setSend(!send);

  }
  



  return (
    <div><h1>Sign Up</h1>
     <form>
     <input type="text" name="" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" name="" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onClick={handleClick}>Submit</button>
     </form>
    </div>
  )
}

export default SignUp