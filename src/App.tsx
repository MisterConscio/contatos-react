import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from './store'

import Contato from './components/Contato'
import NewContact from './components/NewContact'

import EstiloGlobal, { Main } from './styles'

function App() {
  const [ isNewContactOpened, setIsNewContactOpened ] = useState(false)
  const [ editContact, setEditContact ] = useState(false)

  const { itens } = useSelector((state: RootReducer) => state.contatos)

  function editHandler() {
    setEditContact(true)
    setIsNewContactOpened(true)
  }

  function addHandler() {
    setEditContact(false)
    setIsNewContactOpened(true)
  }

  return (
    <>
      <EstiloGlobal />
      <Main>
        <h1>Lista de Contatos</h1>
        <div>
          <form>
            <input type="text" placeholder="Insira um contato" required/>
            <button type="submit">Pesquisar</button>
          </form>
          <button
            type="button"
            onClick={() => addHandler()}
          >
            Novo contato
          </button>
        </div>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              <Contato
                id={item.id}
                name={item.name}
                number={item.number}
                email={item.email}
                onEditing={() => editHandler()}
              />
            </li>
          ))}
        </ul>
        <NewContact
          isOpened={isNewContactOpened}
          onClose={() => setIsNewContactOpened(false)}
          isEditing={editContact}
        />
      </Main>
    </>
  )
}

export default App
