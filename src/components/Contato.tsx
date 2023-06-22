import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../store/contatos'

import ContatoClass from '../models/Contato'

type Props = ContatoClass

const Contato = ({ name, number, email, id, onEditing }: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const [editName, setEditName] = useState("")
  const [editNumber, setEditNumber] = useState("")
  const [editEmail, setEditEmail] = useState("")

  useEffect(() => {
    if (name.length > 0) {
      setEditName(name)
    }
    if (number.length > 0) {
      setEditNumber(number)
    }
    if (email.length > 0) {
      setEditEmail(email)
    }
  }, [name, number, email])

  function saveEdit() {
    dispatch(editar({editName, editNumber, editEmail, id}))
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="text"
            value={editNumber}
            onChange={(e) => setEditNumber(e.target.value)}
          />
          <input
            type="email"
            value={editEmail}
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
