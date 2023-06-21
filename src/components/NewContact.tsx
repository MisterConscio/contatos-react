import { useEffect, useRef } from 'react'

const NewContact = ({isOpened, onClose}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpened])

  return (
    <dialog ref={ref}>
      <form>
        <label htmlFor="name">Nome: </label>
        <input id="name" type="text" placeholder="Nome do contato" required/>
        <label htmlFor="number">Número: </label>
        <input id="number" type="text" placeholder="Número do contato" required/>
        <label htmlFor="email">Email: </label>
        <input id="email" type="text" placeholder="Email do contato" required/>
        <menu>
          <button type="submit">Adcionar</button>
          <button type="button" onClick={onClose}>Fechar</button>
        </menu>
      </form>
    </dialog>
  )
}

export default NewContact
