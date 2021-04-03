import styled from 'styled-components'

import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <LogoBtn to="/">Notilda</LogoBtn>
  )
}

const LogoBtn = styled(Link)`
  font-family: 'Poppins', sans-serif;
  
  font-size: 30px;
  
  text-decoration: none;
  color: white;
`
