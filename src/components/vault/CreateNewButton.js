import styled from 'styled-components'

export function CreateNewButton({text, handleClick}) {
  return <CreateButton onClick={handleClick}>{text}</CreateButton>
}

const CreateButton = styled.button`
  width: 100%;
  height: 50px;

  font-size: 20px;

  border: none;
`
