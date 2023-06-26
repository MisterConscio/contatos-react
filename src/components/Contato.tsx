import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../store/contatos'

import ContatoClass from '../models/Contato'

type Props = ContatoClass

const Contato = ({ name: localName, number: localNumber, email: localEmail, id }: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const [name, setEditName] = useState(localName)
  const [number, setEditNumber] = useState(localNumber)
  const [email, setEditEmail] = useState(localEmail)

  //useEffect(() => {
  //  if (localName.length > 0) {
  //    setEditName(localName)
  //  }
  //  if (localNumber.length > 0) {
  //    setEditNumber(localNumber)
  //  }
  //  if (localEmail.length > 0) {
  //    setEditEmail(localEmail)
  //  }
  //}, [localName, localNumber, localEmail])

  function saveEdit() {
    dispatch(editar({name, number, email, id}))
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setEditName(e.target.value)}
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
    </div>
  )
}

export default Contato
