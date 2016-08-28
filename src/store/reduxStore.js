import {createStore,  applyMiddleware} from 'redux';
import RootReducer from '../reducers/RootReducer'
import createLogger from 'redux-logger';

export default function configureStore() {
  const logger = createLogger({logger:console});
  // const createStoreWithMiddleware = applyMiddleware()(createStore);
  const createStoreWithMiddleware = applyMiddleware(
      logger
  )(createStore);
  const store = createStoreWithMiddleware(RootReducer);
  return store;
}