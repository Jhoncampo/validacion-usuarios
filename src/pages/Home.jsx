import React from 'react'
import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {setUser} = useUserContext()
  const navigate = useNavigate()

  const handleLogin = ()=>{
    setUser({
      name: "jhon",
      email: "jhon@gmail.com"
    })
    navigate("/dashboard")
  }
  return (
      <>
          <h1>Home</h1>
          <button onClick={handleLogin}>Login</button>
      </>
  );
}

export default Home