import { useAppDispatch } from '../../redux.toolkit/app/hooks';
import { decrement, increment, incrementByAmount } from '../../redux.toolkit/stockExemple.reducer/stock.store';
import ButtonsStockAsync from '../buttons.stock.async/buttons.stock.async';

function ButtonsStock() { // componente criado para manter os buttons normais.
  const dispatch = useAppDispatch(); // renomeando o useAppDispatch para dispatch;

  return (
    <div>
      <div>
        <ButtonsStockAsync /> {/* adicionado componente dos bottuns asyncronos */}
        <br />
        <br />
        <p>Sem asyncrono</p>
        <button onClick={() => dispatch(incrementByAmount(5))}>somar de 5 em 5</button>
        <button onClick={() => dispatch(increment())}>Somar</button>
        <button onClick={() => dispatch(decrement())}>Subtrair</button>
      </div>
    </div>
  );
}

export default ButtonsStock;
