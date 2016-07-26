import * as types from '../constants/ActionTypes';
import Utils from '../utils';

function getEndTime(hour) {
  var dt = new Date();
  dt.setHours(hour?hour:(dt.getHours()+1));
  dt.setMinutes(0);
  return dt.getTime();
}

const initialState = {
  isFetchingAllTodos: false,
  data: [
    {
      id: Utils.GUID(),
      title: 'Make a todo!',
      endTime: getEndTime(),
      completedTime: 0,
      completed: false
    },
    {
      id: Utils.GUID(),
      title: 'Complete a todo!',
      endTime: getEndTime(),
      completedTime: 0,
      completed: false
    }
  ]
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.START_FETCH_ALL_TODOS:
      return Object.assign({}, state, {isFetchingAllTodos: true});

    case types.FETCH_ALL_TODOS:
      return Object.assign({}, state, {
        isFetchingAllTodos: false,
        data: action.data.data.reduce(function (pre, cur) {
          //remove duplicates
          !pre.find( key=> key.id===cur.id) && pre.push(cur);
          return pre;
        }, [...state.data])
      });

    case types.ADD_TODO:
      return Object.assign({}, state, {
        data: [
          {
            id: Utils.GUID(),
            title: action.title,
            endTime: getEndTime(action.hour),
            completed: false
          },
          ...state.data
        ]
      });

    case types.DELETE_TODO:
      return Object.assign({}, state, {
        data: state.data.filter(todo => todo.id !== action.id)
      });

    case types.EDIT_TODO:
      return Object.assign({}, state, {
        data: state.data.map(todo =>
          todo.id === action.id ?
            Object.assign({}, todo, { title: action.title, endTime: getEndTime(action.hour) }) :
            todo
        )
      });

    case types.COMPLETE_TODO:
      return Object.assign({}, state, {
        data: state.data.map(todo => {
          var now = new Date().getTime();
          if(todo.id === action.id && (new Date(todo.endTime).getTime()-now)){
            return Object.assign({}, todo, { completed: !todo.completed, completedTime: now });
          }
          return todo;
        })
      });

    default:
      return state
  }
}
