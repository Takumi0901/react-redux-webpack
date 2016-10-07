import {combineReducers} from "redux"
import { reducer as formReducer } from 'redux-form'
import Modal from "./Modal"

const App = combineReducers({
  Modal,
  form: formReducer
})

export default App