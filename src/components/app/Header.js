import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Logo, SmallUserMenu } from '.'

export function Header({currentUser, logout}) {

  
  return (
    <HeaderContainer>
      <Logo />
      {
        currentUser
          ?
            <HeaderLinkContainer>
              <SmallUserMenu user={currentUser} logout={logout} />
            </HeaderLinkContainer>
          :
            <HeaderLinkContainer>
              <HeaderLink to="/login">Login</HeaderLink>
              <HeaderLink to="/register">Register</HeaderLink>
            </HeaderLinkContainer>
          
      }
      
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  height: 70px;
  padding: 0px 20px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #888;
`

const HeaderLink = styled(Link)`
  font-family: 'Roboto', sans-serif;

  text-decoration: none;
  color: black;
`

const HeaderLinkContainer = styled.div`
  display: flex;
`
