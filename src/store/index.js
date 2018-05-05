import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


import sagas from './sagas';
import reducers from './ducks';

import 'config/ReactotronConfig';

const sagaMonitor = __DEV__ ? tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];
tron.log('teste');
const createAppropriateStore = __DEV__ ? tron.createStore : createStore;
const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
