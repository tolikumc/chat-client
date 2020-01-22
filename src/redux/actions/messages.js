import { messagesAPI } from '../../api/dialogs';

const actions = {
  setMessages: items => ({
    type: 'MESSAGE:SET_ITEMS',
    payload: items
  }),
  fetchMessages: dialogId => dispatch => {
    messagesAPI.getAllByDialogId(dialogId).then(({ data }) => {
      dispatch(actions.setMessages(data));
    });
  }
};

export default actions;
