import { useState, useEffect, useRef, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { adicionar, editar } from '../store/contatos'

import styled from 'styled-components'

const Dialog = styled.dialog`
  background-color: var(--color-bg);
  width: 60%;
  text-align: center;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
  }

  input {
    padding: 8px;
    border-radius: 8px;
    width: 100%;

    color: var(--color-text);
    border: none;
  }

  menu {
    margin-top: 16px;
    padding: 0;
    display: flex;
    justify-content:center;
    gap: 1rem;
  }
`

const NewContact = ({isOpened, onClose, isEditing}) => {
  const ref = useRef<HTMLDialogElement>(null);

  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  //const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpened])

  function adicionarContato(event: FormEvent) {
    event.preventDefault()

    dispatch(
      adicionar({
        name,
        number,
        email
      })
    )
  }

  function editarContato() {
    dispatch(
      editar({
        name,
        number,
        email,
        id
      })
    )
  }

  return (
    <Dialog ref={ref}>
      <form onSubmit={adicionarContato} method="dialog">
        {isEditing ? (
          <h3>Editar contato</h3>
        ):(
          <h3>Adicionar contato</h3>
        )}
        <section>
          <div className="form-control">
            <label htmlFor="name">Nome: </label>
            <input
              id="name"
              type="text"
              placeholder="Nome do contato"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="number">Número: </label>
            <input
              id="number"
              type="text"
              placeholder="Número do contato"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              placeholder="Email do contato"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {isEditing ? (
            <menu>
              <button type="button" onClick={editarContato}>Salvar</button>
              <button type="button" onClick={onClose}>Cancelar</button>
            </menu>
          ):(
            <menu>
              <button type="submit">Adcionar</button>
              <button type="button" onClick={onClose}>Fechar</button>
            </menu>
          )}
        </section>
      </form>
    </Dialog>
  )
}

export default NewContact
