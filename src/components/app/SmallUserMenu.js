import {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function SmallUserMenu({user, logout}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <SmallMenuButtonContainer>
      <SmallMenuButton onClick={() => setExpanded(!expanded)}>{user.username}</SmallMenuButton>
      {
      expanded && 
        <SmallMenuContainer>
          <ul>
            <li>
              <SmallMenuItem onClick={() => setExpanded(false)} to="/settings">Settings</SmallMenuItem>
            </li>
            <li>
              <SmallMenuItem onClick={logout} to="/login">Logout</SmallMenuItem>
            </li>
          </ul>
        </SmallMenuContainer>
      }
    </SmallMenuButtonContainer>
  )
}

const SmallMenuButtonContainer = styled.div`
  /* position: relative; */
`

const SmallMenuButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  padding: 5px;

  color: white;
`

const SmallMenuItem = styled(Link)`
  text-decoration: none;
  color: black;
`

const SmallMenuContainer = styled.div`
  width: 200px;
  height: 100%;
  padding: 10px;
  
  position: fixed;
  right: 0px;
  top: 70px;

  background: yellow;
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul li {
    margin: 10px 0px;

    list-style: none;
  }
`
