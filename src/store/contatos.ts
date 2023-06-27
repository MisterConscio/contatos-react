import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 0,
      name: "Fulano",
      number: "(81) 93742-4872",
      email: "user.anon@gmail.com"
    },
    {
      id: 1,
      name: "Beltrano",
      number: "(55) 93742-4872",
      email: "user.anon@gmail.com"
    },
    {
      id: 2,
      name: "Sicrano",
      number: "(72) 93742-4872",
      email: "user.anon@gmail.com"
    },
    {
      id: 3,
      name: "Orangotango",
      number: "(83) 92837-4329",
      email: "user.anon@gmail.com"
    },
    {
      id: 4,
      name: "Zé do Óleo",
      number: "(11) 92837-4329",
      email: "user.anon@gmail.com"
    },
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const contatoIndex = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (contatoIndex >= 0) {
        state.itens[contatoIndex] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Ja existe uma contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
