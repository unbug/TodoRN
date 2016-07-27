import * as types from '../constants/ActionTypes';
import * as APIs from '../constants/ServerAPIs';


function shouldFetchAllTodos(state) {
  const data = state.todos;
  if (data && data.isFetchingAllTodos) {
    return false
  }
  return true;
}

export function fetchAllTodos() {
  return async (dispatch, getState) =>{
    //verify
    if(!shouldFetchAllTodos(getState())){
      return Promise.resolve();
    }

    //dispatch start fetch action
    dispatch({type: types.START_FETCH_ALL_TODOS});

    //fetching
    const response = await fetch(APIs.allTodos);
    //response
    const data = await response.json();

    //dispatch end fetch action
    return dispatch({
      type: types.FETCH_ALL_TODOS,
      data
    });
  }
}

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
