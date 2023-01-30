import { useAppDispatch } from '../../redux.toolkit/app/hooks';
import { incrementAsync, decrementAsync } from '../../redux.toolkit/stockExemple.reducer/stock.store'; // importação das funções asyncronas criadas;

function ButtonsStockAsync() { // componente criado para manter os buttons asyncronos;
  const dispatch = useAppDispatch(); // renomeando o useAppDispatch para dispatch;

  const handleIncrement = () => { // função que usa outra função que é criada pelo createAsyncThunk, para criar manipulação de estruturas asyncronas;
    dispatch(incrementAsync(1)); // dispatch despachando resultado de uma funcão assyncrona;
  };
  const handleIncrement5 = () => { // função que usa outra função que é criada pelo createAsyncThunk, para criar manipulação de estruturas asyncronas;
    dispatch(incrementAsync(5)); // dispatch despachando resultado de uma funcão assyncrona;
  };

  const handleDecrement = () => { // função que usa outra função que é criada pelo createAsyncThunk, para criar manipulação de estruturas asyncronas;
    dispatch(decrementAsync(1)); // dispatch despachando resultado de uma funcão assyncrona;
  };

  return (
    <div>
      <div>
        <p>Asyncrono com 3 segundos de espera</p>
        <button onClick={handleIncrement5}> somar 5 em 5 asyncrono</button>
        <button onClick={handleIncrement}>Somar</button>
        <button onClick={handleDecrement}>Subtrair</button>
      </div>
    </div>
  );
}

export default ButtonsStockAsync;
