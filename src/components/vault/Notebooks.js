import styled from 'styled-components'

import { Notebook, CreateNewButton } from '.'

export function Notebooks({
  currentNotebook, 
  notebooks, 
  setNotebooks, 
  setCurrentNotebook, 
  createNotebook, 
  updateNotebook,
  deleteNotebook
}) {

  console.log(currentNotebook)
  return (
    <NotebooksContainer>
      <CreateNewButton text="New notebook" handleClick={createNotebook} />
      { 
        notebooks
          ? notebooks.map(notebook => 
            <Notebook 
              key={notebook.id} 
              notebook={notebook}
              setCurrentNotebook={setCurrentNotebook}
              currentNotebook={currentNotebook}
              updateNotebook={updateNotebook}
              deleteNotebook={deleteNotebook}
            />)
          : <div>There are no notebooks</div>
      }
    </NotebooksContainer>
  )
}

const NotebooksContainer = styled.div`
  width: 15%;
  height: 100%;
  
  border-right: 1px solid lightgrey;
`
