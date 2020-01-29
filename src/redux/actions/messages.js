import { messagesAPI } from '../../api/dialogs';

const actions = {
  setMessages: items => ({
    type: 'MESSAGE:SET_ITEMS',
    payload: items
  }),
  setIsLoading: bool =>({
    type: 'MESSAGE:SET_IS_LOADING',
    payload: bool
  }),
  fetchMessages: dialogId => dispatch => {
    dispatch(actions.setIsLoading(true));
    messagesAPI.getAllByDialogId(dialogId).then(({ data }) => {
      dispatch(actions.setMessages(data));
    }).catch(() => {
      dispatch(actions.setIsLoading(false))
    });
  }
};

export default actions;
