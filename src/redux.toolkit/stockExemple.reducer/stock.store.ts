import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { // interface do stado inicial do reducer stock;
  counter: number;
}

const initialState: CounterState = { // estaduo inicial do reducer stock;
  counter: 0
} as CounterState;

// exportação da função que é usada no componente de ButtonsStockAsync;
export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount: number) => { // método para manipular requisições asyncronas do redux toolkit;
  // amount nesse paramentro é considero os "dados" que a função recebe para conseguir fazer uma requisição;
  await new Promise((resolve) => setTimeout(resolve, 3000)); // lugar onde pode ser substituido pela função de busca asyncrona;
  return amount; // retorno da responsa da requisição, seguindo a regra de negocio criado dentro do reducer;
});

// exportação da função que é usada no componente de ButtonsStockAsync;
export const decrementAsync = createAsyncThunk('counter/decrementAsync', async (amount: number) => { // método para manipular requisições asyncronas do redux toolkit;
  // amount nesse paramentro é considero os "dados" que a função recebe para conseguir fazer uma requisição;
  await new Promise((resolve) => setTimeout(resolve, 3000)); // lugar onde pode ser substituido pela função de busca asyncrona;
  return amount; // retorno da responsa da requisição, seguindo a regra de negocio criado dentro do reducer;
});

const stock = createSlice({ // instrução para criação do reducer juntamente com suas actions;
  name: 'counter', // name do reducer criado;
  initialState, // estado inicial da aplicação do reducer;
  reducers: { // instruções que não precisarao ser asyncronas para serem aplicadas;
    increment: (state) => { // função não asyncrona;
      state.counter += 1;
    },
    decrement: (state) => { // função não asyncrona;
      state.counter -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => { // função não asyncrona;
      state.counter += action.payload;
    }
  },
  extraReducers: (builder) => { // função que dá o manuseio da requisição asyncrona, o processo da requisição, tem 3 etapas: pending, fulfilled, rejected
    builder
      .addCase(incrementAsync.pending, (state) => { // função relata se a requisição está em andamento;
        console.log('Loading');
      })
      .addCase(incrementAsync.fulfilled, (state, action) => { // função recebe a action que é a resposta da função incrimentAsync, e agrega dentro do estado;
        state.counter += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => { // devolve um erro caso a requisição seja rejeitada;
        console.log('Error', action.error);
      })
      .addCase(decrementAsync.pending, (state) => { // função relata se a requisição está em andamento;
        console.log('Loading');
      })
      .addCase(decrementAsync.fulfilled, (state, action) => { // função recebe a action que é a resposta da função decrementAsync, e agrega dentro do estado;
        state.counter -= action.payload;
      })
      .addCase(decrementAsync.rejected, (state, action) => { // devolve um erro caso a requisição seja rejeitada;
        console.log('Error', action.error);
      });
  }
});

export const { increment, decrement, incrementByAmount } = stock.actions; // exporta as funções não asyncronas;

export default stock.reducer;
