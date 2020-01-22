import { dialogsAPI } from '../../api/dialogs';

const actions = {
  setDialog: items => ({
    type: 'DIALOGS:SET_ITEMS',
    payload: items
  }),
  setCurrentDialog: id => ({
    type: 'DIALOGS:SET_CURRENT_DIALOG',
    payload: id
  }),
  fetchDialogs: () => dispatch => {
    dialogsAPI.getAll().then(({ data }) => {
      dispatch(actions.setDialog(data));
    });
  }
};

export default actions;
