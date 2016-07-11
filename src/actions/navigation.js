import * as types from '../constants/ActionTypes';

export function switchMainTab(index) {
  return {
    type: types.SWITCH_MAIN_TAB,
    index: index
  }
}
