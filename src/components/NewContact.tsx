import { useState, useEffect, useRef, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { adicionar } from '../store/contatos'

import styled from 'styled-components'

const Dialog = styled.dialog`
  width: 600px;
  text-align: center;
  border-radius: 0.5em;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
  }

  h3 {
    margin-bottom: 1rem;
  }

  .form-control:not(:last-child) {
    margin-bottom: 1rem;
  }

  input {
    padding: 8px;
    border-radius: 8px;
    width: 100%;

    background-color: var(--color-primary-btn);
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

  menu > button {
    background-color: var(--color-bg);
    color: var(--color-text);

    :hover {
      background-color: var(--color-secondary-btn);
    }
  }
`

type Props = {
  isOpened?: boolean
  onClose?: any
}

const NewContact = ({isOpened, onClose}: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")

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

    setName(""); setNumber(""); setEmail("")
  }

  return (
    <Dialog ref={ref}>
      <form onSubmit={adicionarContato}>
        <h3>Adicionar contato</h3>
        <div className="form-control">
          <label htmlFor="name">Nome: </label>
          <input
            id="name"
            type="text"
            placeholder="Nome do contato"
            value={name}
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
            value={number}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <menu>
          <button type="submit">Adcionar</button>
          <button type="button" onClick={onClose}>Fechar</button>
        </menu>
      </form>
    </Dialog>
  )
}

export default NewContact
