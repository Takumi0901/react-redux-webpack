import * as ActionTypes from '../constants/ActionTypes'

export default function modalReducer(state={Opened: false}, action) {
  switch(action.type){
    case ActionTypes.MODAL_OPEN:
      return {Opened: action.Opened}
    default:
      return state;
  }
}