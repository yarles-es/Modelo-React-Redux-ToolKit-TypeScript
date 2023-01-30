import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './redux.toolkit';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider para dar a todas as estruturas de dentro, o acesso a store do reducer */}
      <BrowserRouter> {/* Nescessario para o funcinamento de criação de novas rotas */}
        <App /> {/* Componente principal da aplicação */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  container
);

reportWebVitals();
