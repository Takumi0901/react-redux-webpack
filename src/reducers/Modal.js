import * as ActionTypes from '../constants/ActionTypes'

export default function modalReducer(state={show: false}, action) {
  switch(action.type){
    case ActionTypes.MODAL_OPEN:
      return {show: action.show}
    default:
      return state
  }
}