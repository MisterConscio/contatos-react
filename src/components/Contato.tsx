import ContatoClass from '../models/Contato'

type Props = ContatoClass

const Contato = ({ name, number, email }: Props) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{number}</p>
      <p>{email}</p>
      <button type="button">Editar</button>
      <button type="button">Remover</button>
    </div>
  )
}

export default Contato
