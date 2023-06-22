import { useDispatch } from 'react-redux'

import { remover } from '../store/contatos'

import ContatoClass from '../models/Contato'

type Props = ContatoClass

const Contato = ({ name, number, email, id, onEditing }: Props) => {
  const dispatch = useDispatch()

  return (
    <div>
      <h3>{name}</h3>
      <p>{number}</p>
      <p>{email}</p>
      <button type="button" onClick={onEditing}>Editar</button>
      <button
        type="button"
        onClick={() => dispatch(remover(id))}
      >
        Remover
      </button>
    </div>
  )
}

export default Contato
