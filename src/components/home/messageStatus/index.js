import React from 'react';
import CombinedShape from '../../../assets/img/CombinedShape.svg';
import Shape from '../../../assets/img/Shape.svg';

export const MessageStatus = ({ isMe = true, isRead = true }) =>
  console.log(isMe, isRead) ||
  (isMe &&
    (isRead ? (
      <img src={CombinedShape} alt="read" className="message__content-read" />
    ) : (
      <img src={Shape} alt="read" className="message__content-read" />
    )));
