const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD3':
      return {
        ...state,
        name: 1
      };
    case 'SUB3':
      return {
        ...state
      }
    default:
      return state;
  }
};
