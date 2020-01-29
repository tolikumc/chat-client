import React, { useEffect, useRef } from 'react';
import messagesActions from '../../../redux/actions/messages';
import { Messages } from './index';
import { connect } from 'react-redux';
import './index.scss';

const MessagesContainer = ({
  fetchMessages,
  currentDialogId,
  items,
  isLoading
}) => {
    const messagesRef =useRef(null);
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId, fetchMessages]);

  useEffect(()=>{
      messagesRef.current.scrollTo(0, 99999);
  }, [items]);

  return <Messages items={items} isLoading={isLoading} blockRef={messagesRef}/>;
};

export default connect(
  ({ messages, dialogs }) => ({
    items: messages.items,
    currentDialogId: dialogs.currentDialogId,
    isLoading: messages.isLoading
  }),
  messagesActions
)(MessagesContainer);
