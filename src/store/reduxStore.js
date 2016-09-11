import {createStore,  applyMiddleware} from 'redux'
import RootReducer from '../reducers/RootReducer'
import createLogger from 'redux-logger'
import DevTools from '../containers/DevTools'

export default function configureStore() {
  const logger = createLogger({logger:console})
  const createStoreWithMiddleware = applyMiddleware(
      logger
  )(createStore)
  const store = createStoreWithMiddleware(RootReducer, DevTools.instrument())
  return store
}