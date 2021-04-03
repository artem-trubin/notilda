import { useState } from 'react'

import axios from 'axios'

export function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const user = {
      userName: username,
      password
    }
    if (password !== secondPassword) {
      console.log("Passwords must be same")
    } else {
      console.log(user)
      // fetch(`http://localhost:3001/api/users`, {
      //   method: 'POST',
      //   body: JSON.stringify(user),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      // })
      //   // .then(response => response.json())
      //   .then(response => console.log(response))

      axios.post('http://localhost:3001/api/users', user)
        .then(response => console.log(response))
    }
  }

  function handleChange(event) {
    if (event.target.id === 'username') {
      setUsername(event.target.value)
    }
    if (event.target.id === 'password') {
      setPassword(event.target.value)
    }
    if (event.target.id === 'secondPassword') {
      setSecondPassword(event.target.value)
    }
  }

  return (
    <>
    <h2>Registration</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="text" 
          id="password" 
          value={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="secondPassword">Repeat password</label>
        <input 
          type="text" 
          id="secondPassword" 
          value={secondPassword}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Login"/>
    </form>
    </>
  )
}
