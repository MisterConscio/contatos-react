import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from './store'
import { alterarTermo } from './store/filtro'

import Contato from './components/Contato'
import NewContact from './components/NewContact'

import EstiloGlobal, { Main } from './styles'

function App() {
  const [ isNewContactOpened, setIsNewContactOpened ] = useState(false)
  //const [ editContact, setEditContact ] = useState(false)

  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const dispatch = useDispatch()

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {

      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.name.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return contatosFiltrados

    } else {

      return itens

    }
  }

  //function editHandler() {
  //  setEditContact(true)
  //  setIsNewContactOpened(true)
  //}

  function addHandler() {
    //setEditContact(false)
    setIsNewContactOpened(true)
  }

  const contatos = filtraContatos()

  return (
    <>
      <EstiloGlobal />
      <Main>
        <h1>Lista de Contatos</h1>
        <div>
          <form>
            <input
              type="text"
              placeholder="Buscar um contato"
              required
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            {/*<button type="submit">Pesquisar</button>*/}
          </form>
          <button
            type="button"
            onClick={() => addHandler()}
          >
            Novo contato
          </button>
        </div>
        <ul>
          {contatos.map((item) => (
            <li key={item.id}>
              <Contato
                id={item.id}
                name={item.name}
                number={item.number}
                email={item.email}
              />
            </li>
          ))}
        </ul>
        <NewContact
          isOpened={isNewContactOpened}
          onClose={() => setIsNewContactOpened(false)}
        />
      </Main>
    </>
  )
}

export default App
