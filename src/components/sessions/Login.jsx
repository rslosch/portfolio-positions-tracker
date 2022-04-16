import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ({ loginUser, addErrors, clearErrors }) => {
  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(r => r.json())
    .then(data => setUsers(data))

    return () => {
      clearErrors()
    }
  }, [])

  const handleChange = e => {
    setUsername(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase())
    if(user){
      loginUser(user)
      navigate('/investments')
    }else {
      addErrors(["Username did not match any user in database"])
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" onChange={handleChange} value={username}/>
        </div>

        <input type="submit" value="Login" />
      </form>

    </div> 
  )
}

export default Login
