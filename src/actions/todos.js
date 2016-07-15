import * as types from '../constants/ActionTypes'

export function addTodo(title, hour) {
  return {type: types.ADD_TODO, title, hour}
}

export function deleteTodo(id) {
  return {type: types.DELETE_TODO, id}
}

export function editTodo(id, title, hour) {
  return {type: types.EDIT_TODO, id, title, hour}
}

export function completeTodo(id) {
  return {type: types.COMPLETE_TODO, id}
}
