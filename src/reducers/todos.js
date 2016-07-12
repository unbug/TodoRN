import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from '../constants/ActionTypes'
import Utils from '../utils';

function getEndTime(hour) {
  var dt = new Date();
  dt.setHours(hour?hour:(dt.getHours()+1));
  dt.setMinutes(0);
  return dt.getTime();
}

const initialState = [
  {
    id: Utils.GUID(),
    title: 'Good day!',
    endTime: getEndTime(),
    completedTime: 0,
    completed: false
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: Utils.GUID(),
          title: action.title,
          endTime: getEndTime(action.hour),
          completed: false
        },
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text, hour: action.hour }) :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo => {
        var now = new Date().getTime();
        if(todo.id === action.id && (new Date(todo.endTime).getTime()-now)){
          return Object.assign({}, todo, { completed: !todo.completed, completedTime: now });
        }
        return todo;
      })

    default:
      return state
  }
}
