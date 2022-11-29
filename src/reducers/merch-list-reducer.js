const reducer = (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
  case 'ADD_MERCH':
    return Object.assign({}, state, {
      [id]: {
        name: names,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  case 'DELETE_MERCH':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
 return state;
};
}

export default reducer;