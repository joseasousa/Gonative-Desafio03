import React from 'react';
import { Provider } from 'react-redux';

import Maps from 'pages/maps';

import store from 'store';

const App = () => (
  <Provider store={store} >
    <Maps />
  </Provider>
);

export default App;
