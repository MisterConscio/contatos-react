import { useState } from 'react'

import Contato from './components/Contato'
import NewContact from './components/NewContact'

import EstiloGlobal, { Main } from './styles'

const contatos = [
  {
    id: 0,
    name: "Fulano",
    number: "(79) 93742-4872",
    email: "user.anon@gmail.com"
  },
  {
    id: 1,
    name: "Beltrano",
    number: "(79) 93742-4872",
    email: "user.anon@gmail.com"
  },
  {
    id: 2,
    name: "Sicrano",
    number: "(79) 93742-4872",
    email: "user.anon@gmail.com"
  },
  {
    id: 3,
    name: "Orangotango",
    number: "(79) 92837-4329",
    email: "user.anon@gmail.com"
  },
]

function App() {
  const [ isNewContactOpened, setIsNewContactOpened ] = useState(false)

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
          <button type="button" onClick={() => setIsNewContactOpened(true)}>Novo contato</button>
        </div>
        <ul>
          {contatos.map((item, index) => (
            <li key={index}>
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
