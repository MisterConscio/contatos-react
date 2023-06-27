import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './contatos'
import filtroReducer from './filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
