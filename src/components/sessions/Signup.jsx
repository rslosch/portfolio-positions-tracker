import React, { useState, useEffect } from 'react'
import { headers } from '../../Globals'
import { useNavigate } from 'react-router-dom'

//baseURL as fetch link not posting...?

const Signup = ({ loginUser, addErrors, clearErrors, loggedIn }) => {
  const [username, setUsername] = useState("")

  const navigate = useNavigate()

  const handleSubmit = e =>{
    e.preventDefault()

      if(username.length >= 5){
        fetch('http://localhost:3001/users', {
          method: "POST",
          headers ,
          body: JSON.stringify({ username })
        })
        .then(r => r.json())
        .then(data => {
          loginUser(data)
          navigate('/investments')
        })
      } else {
        addErrors(["Username must be longer than 5 characters"])
    }
  }

  useEffect(() => {
    if(loggedIn){
      return navigate('/investments')
    }
    return () => {
      clearErrors([])
    }
    
  }, [loggedIn])
  
  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <br></br>
        <input type="submit" value="Create Account" />
      </form>
    
    </div>
  )
}

export default Signup