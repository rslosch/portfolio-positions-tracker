import NavBar from "./navigation/NavBar";
import Login from "./sessions/Login";
import Home from "./static/Home";
import Signup from "./sessions/Signup";
import InvestmentList from "./Investments/InvestmentList";
import InvestmentForm from "./Investments/InvestmentForm";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useState , useEffect } from "react";
import Errors from "./static/Errors";

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])

  const loginUser = user => {
    setCurrentUser(user)
    setLoggedIn(true)
    localStorage.setItem('user_id', user.id)
  }

  const logoutUser = () => {
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('user_id')
  }

  const addErrors = error => {
    setErrors(error)
  }
  const clearErrors = () => {
    setErrors([])
  }

  //useEffect sideeffect to persists logged in status
  useEffect(() => {
    const userId = localStorage.getItem('user_id')
      if(userId && !loggedIn){
        fetch('http://localhost:3001/users/'+ userId)
        .then(r => r.json())
        .then(data => loginUser(data))
      }
  }, [loggedIn])

  return (
    <Router>
      <NavBar loggedIn={ loggedIn } logoutUser={ logoutUser } />
      <Errors errors= {errors }/>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login loginUser={loginUser} addErrors={addErrors} clearErrors={clearErrors} loggedIn={ loggedIn } /> } />
        <Route path='/signup' element={ <Signup loginUser={loginUser} addErrors={addErrors} clearErrors={clearErrors} loggedIn={loggedIn} /> } />
        <Route path='/investments' element={ <InvestmentList currentUser={currentUser} loggedIn={loggedIn} /> } />
        <Route path='/investments/new' element={ <InvestmentForm loggedIn={loggedIn}/> } />
      </Routes>
    </Router>
  );
}

export default App;