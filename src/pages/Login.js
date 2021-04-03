import { useState } from 'react'
import { Redirect } from 'react-router-dom'

import styled from 'styled-components'

import { login } from '../services'
import {setToken} from '../services'

export function LoginPage({ currentUser, setCurrentUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(event) {
    event.preventDefault()
    try {
      const user = await login({
        username, password,
      })
      setToken(user.token)
      setCurrentUser(user)
      setUsername('')
      setPassword('')
      window.localStorage.setItem(
        'loggedNotildaUser', JSON.stringify(user)
      )
    } catch (exception) {
      console.log(exception)
    }
  }

  if (currentUser) {
    return <Redirect to="/vault" />
  }

  return (
    <LoginFormContainer>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          value={username}
          onChange={({target}) => {setUsername(target.value)}}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="text" 
          id="password" 
          value={password}
          onChange={({target}) => {setPassword(target.value)}}
        />
      </div>
      <input type="submit" value="Login"/>
    </form>
    </LoginFormContainer>
  )
}

const LoginFormContainer = styled.div`
  margin: auto;
`
