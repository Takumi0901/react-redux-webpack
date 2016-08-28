import * as ActionTypes from '../constants/ActionTypes'

export function modalOpen(clicked) {
  return {
    type: ActionTypes.MODAL_OPEN,
    Opened: clicked
  }
}