import { useDispatch, useSelector } from "react-redux"

import styled from "styled-components"

import { RootReducer } from '../store'
import { alterarTermo } from '../store/filtro'

const Head = styled.header`
  text-align: center;
  margin-bottom: 2em;

  h1 {
    margin-block: 1rem;
  }

  form {
    margin-bottom: 0.5em;
  }

  form > input {
    width: 350px;
  }
`

const Header = ({addHandler}) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Head>
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
        </form>
        <button
          type="button"
          onClick={addHandler}
        >
          Novo contato
        </button>
      </div>
    </Head>
  )
}

export default Header
