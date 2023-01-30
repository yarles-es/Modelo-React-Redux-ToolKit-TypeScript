import { configureStore } from '@reduxjs/toolkit'; // importação nescessaria para fazer o combineReducer;

import stockReducer from './stockExemple.reducer/stock.store'; // importação de um reducer;

const store = configureStore({ // criação do store fazendo o combineReducer, sendo feito por chave de objetos;
  reducer: {
    stock: stockReducer
    // exemple: newReducer  // exemplo caso tenha outro reducer a ser vinculado;
  }
});

export type RootState = ReturnType<typeof store.getState>; // exportação da instrução que entrega todos os dados do reducer;
export type AppDispatch = typeof store.dispatch; // exportação da instrução de tipo do dispatch;
export default store; // exportação do store completo;
