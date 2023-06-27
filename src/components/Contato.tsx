import { useState } from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'

import { remover, editar } from '../store/contatos'

import ContatoClass from '../models/Contato'

const Container = styled.div`
  inline-size: 250px;
  overflow-wrap: break-word;

  input {
    display: block;
    font-size: var(--fs-400);
    padding: 0;
    line-height: 1.5;
    background: none;
    width: 250px;
  }

  menu {
    margin-top: 0.25rem;
    padding-left: 0;

    > * + * {
      margin-left: 1em;
    }
  }

  @media (max-width: 767px) {
    margin-inline: auto;
  }
`

type Props = ContatoClass

const Contato = ({ name: localName, number: localNumber, email: localEmail, id }: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const [name, setEditName] = useState(localName)
  const [number, setEditNumber] = useState(localNumber)
  const [email, setEditEmail] = useState(localEmail)

  function saveEdit() {
    dispatch(editar({name, number, email, id}))
    setIsEditing(false)
  }

  return (
    <Container>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setEditName(e.target.value)}
            autoFocus
          />
          <input
            type="text"
            value={number}
            onChange={(e) => setEditNumber(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEditEmail(e.target.value)}
          />
          <menu>
            <button
              type="button"
              onClick={() => saveEdit()}
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
          </menu>
        </>
      ):(
        <>
          <h3>{name}</h3>
          <p>{number}</p>
          <p>{email}</p>
          <menu>
            <button type="button" onClick={() => setIsEditing(true)}>Editar</button>
            <button
              type="button"
              onClick={() => dispatch(remover(id))}
            >
              Remover
            </button>
          </menu>
        </>
      )}
    </Container>
  )
}

export default Contato
