import * as ActionTypes from '../constants/ActionTypes'

export function modalOpen(dec) {
  return {
    type: ActionTypes.MODAL_OPEN,
    show: dec
  }
}