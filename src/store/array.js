export default store => next => action =>
  Array.isArray(action)
    ? action.map(next)
    : next(action);
