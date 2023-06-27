import { useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

import { RootReducer } from './store'

import Contato from './components/Contato'
import NewContact from './components/NewContact'
import Header from './components/Header'

import EstiloGlobal, { Main } from './styles'

const ContactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 2em;

  li {
    list-style: none;
  }
`

function App() {
  const [ isNewContactOpened, setIsNewContactOpened ] = useState(false)

  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { itens } = useSelector((state: RootReducer) => state.contatos)

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

  function addHandler() {
    setIsNewContactOpened(true)
  }

  const contatos = filtraContatos()

  return (
    <>
      <EstiloGlobal />
      <Main>
        <Header
          addHandler={() => addHandler()}
        />
        <ContactList>
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
        </ContactList>
        {isNewContactOpened && (
          <NewContact
            isOpened={isNewContactOpened}
            onClose={() => setIsNewContactOpened(false)}
          />
        )}
      </Main>
    </>
  )
}

export default App
