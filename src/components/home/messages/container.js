import React, { useEffect } from 'react';
import messagesActions from '../../../redux/actions/messages';
import { Messages } from './index';
import { connect } from 'react-redux';

const MessagesContainer = ({ fetchMessages, currentDialogId, items }) => {
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId, fetchMessages]);

  return <Messages items={items} />;
};

export default connect(
  ({ messages, dialogs }) => ({
    items: messages.items,
    currentDialogId: dialogs.currentDialogId
  }),
  messagesActions
)(MessagesContainer);
