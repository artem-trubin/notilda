import styled, { createGlobalStyle } from 'styled-components'

import { Header } from './components'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import {
  HomePage,
  LoginPage,
  RegisterPage,
  VaultPage,
  SettingsPage,
} from './pages'

import {setToken} from './services'

import { useEffect, useState } from 'react'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)

  function logout() {
    setCurrentUser(null)
    window.localStorage.removeItem('loggedNotildaUser')
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNotildaUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setToken(user.token)
      setCurrentUser(user)
    }
  }, [])

  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Header logout={logout} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <PageContainer>
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            {
              currentUser 
                ? <Redirect to="/vault" /> 
                : <LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            }
          </Route>
          <Route path="/vault">
            {
              currentUser
                ? <VaultPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
                : <Redirect to="/login" />
            }
          </Route>
          <Route path="/settings">
            {
              currentUser
                ? <SettingsPage />
                : <Redirect to="/login" />
            }
          </Route>
          <Route path="/">
            {
              currentUser
                ? <Redirect to="/vault" />
                : <HomePage />
            }
          </Route>
        </Switch>
        </PageContainer>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`
