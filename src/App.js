import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Maps from 'pages/maps';

import { store, persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Maps />
    </PersistGate>
  </Provider>
);

export default App;
