import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { cardsStore } from './store/cardsStore';

import { App } from './components/App';

render(
  <React.StrictMode>
    <Provider store={cardsStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
