import styled from 'styled-components'
import {useState} from 'react'


export function Notebook({notebook, setCurrentNotebook, currentNotebook, updateNotebook, deleteNotebook}) {

  const [isHovered, setIsHovered] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  const [notebookName, setNotebookName] = useState(notebook.name)

  function makeEditable() {
    setIsEditable(true)
  }

  function saveClick() {
    updateNotebook({...notebook, name: notebookName})
    setIsEditable(false)
  }

  function deleteClick() {
    if (window.confirm('Are you sure?')) {
      deleteNotebook(notebook)
    }
  }
  
  return (
    <NotebookContainer
      onClick={() => {setCurrentNotebook(notebook)}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={currentNotebook && currentNotebook.id === notebook.id ? 'current' : ''}
    >
      <div>
        {
          isEditable
            ? <input
            
                type="text"
                value={notebookName}
                onChange={({target}) => {setNotebookName(target.value)}}
              />
            : <NotebookName>{notebook.name}</NotebookName>
        }
      </div>
      {
        isEditable
          ? <NotebookButton onClick={saveClick} className="far fa-save" />
          : isHovered &&
            <div>
              <NotebookButton
                className="fas fa-pencil-alt" 
                onClick={makeEditable}
              />
              <NotebookButton onClick={deleteClick} className="fas fa-trash-alt" />
            </div>
      }
    </NotebookContainer>
  )
}

const NotebookContainer = styled.div`
  height: 50px;
  
  padding: 0px 10px;
  
  display: flex;
  justify-content: space-between;

  font-size: 20px;

  line-height: 50px;
  &.current {
    background: yellow;
  }
`

const NotebookButton = styled.div`
  padding: 7px;
  margin: 5px;

  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: grey;
    color: white;
  }
`

const NotebookName = styled.div`
  background: blue;
`
