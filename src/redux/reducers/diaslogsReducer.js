const initialState = {
  items: [],
  currentDialogId: null,
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'DIALOGS:SET_ITEMS':
      return { items: payload };
    case 'DIALOGS:SET_CURRENT_DIALOG':
      return {
        ...state,
        currentDialogId: payload
      };
    default:
      return state;
  }
};
