import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate= useNavigate();
 
  const handleLogout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
       navigate("/")
    }).catch((error) => {
      // An error happened.
      alert("errr");
    });
  }

  return (
    <div>Home
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home