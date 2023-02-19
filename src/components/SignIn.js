import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebaseConfig"
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { provider } from '../firebaseConfig';

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [send, setSend] = useState(false);

  const navigate = useNavigate();

//   console.log(auth.userCredential);

  useEffect(() =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
      
    // console.log(user);
    // setUserEmail(user.email);
    navigate("/home");
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert("not")
    // console.log(errorMessage);
    // ..
  });

  }, [send]);

  const handleClick = (e) =>{
    e.preventDefault();
    setSend(!send);

  }

//   useEffect(() =>{
   
      
//   }, [send])
 const handleGoogleSignIn = (e) =>{
    e.preventDefault();

    signInWithPopup(auth, provider)
  .then((result) => {
    // // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    navigate("/home")
    // ...
  }).catch((error) => {

  });

  }



  return (
    <div><h1>Sign In</h1>

     { userEmail && <h1>{userEmail}</h1>}
     <form>
        <input type="email" name="" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onClick={handleClick}>Sign In</button>
        <button type="submit" onClick={handleGoogleSignIn}>Sign In with Google</button>


     </form>
    </div>
  )
}

export default SignIn