//import * as enums from '../utils/enums/Contato'

class Contato {
  name: string
  number: string
  email: string
  id: number

  constructor(
    name: string,
    number: string,
    email: string,
    id: number,
  ) {
    this.name = name
    this.number = number
    this.email = email
    this.id = id
  }
}

export default Contato
