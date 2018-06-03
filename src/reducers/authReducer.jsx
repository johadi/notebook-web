const initialState = {}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD2':
      return {
        ...state,
        name: 1
      };
    case 'SUB2':
      return {
        ...state
      };
    default:
      return state;
  }
};
