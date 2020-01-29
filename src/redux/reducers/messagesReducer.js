const initialState = {
  items: null,
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'MESSAGE:SET_ITEMS':
      return { ...state, items: payload, isLoading: false };
    case 'MESSAGE:SET_IS_LOADING':
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
