import { Switch, Route } from 'react-router-dom';

import ButtonsStock from './components/buttons.stock.exemple/buttons.stock';
import { useAppSelector } from './redux.toolkit/app/hooks';

function App() {
  const stock = useAppSelector((state) => state.stock); // instrução para ter acesso as dados do reducer;

  return (
    <div className="App">
      {stock.counter} {/* colocando na tela o valor da variavel counter do reducer */}
      <Switch> {/* Switch nescessario para criação de rotas */}
        <Route exact path="/" component={ButtonsStock} /> {/* Rota que chama o componente para ser criado */}
      </Switch>
    </div>
  );
}

export default App;
