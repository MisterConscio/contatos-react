import { useState } from 'react'
import { Provider, useSelector } from 'react-redux'

import { RootReducer } from './store'
import store from './store'

import Contato from './components/Contato'
import NewContact from './components/NewContact'

import EstiloGlobal, { Main } from './styles'

function App() {
  const [ isNewContactOpened, setIsNewContactOpened ] = useState(false)
  const { itens } = useSelector((state: RootReducer) => state.contatos)

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
            onClick={() => setIsNewContactOpened(true)}
          >
            Novo contato
          </button>
        </div>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              <Contato
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
