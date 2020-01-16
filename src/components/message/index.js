import React from 'react';
import './index.scss';
import classNames from 'classnames';
import { Time } from '../time';
import { MessageStatus } from '../messageStatus';

export const Message = ({
  avatar,
  text,
  date,
  isMe,
  isRead,
  attachments,
  isTyping
}) => (
  <div
    className={classNames('message', {
      'message--isMe': isMe,
      'message--isTyping': isTyping,
      'message--image': attachments && attachments.length === 1
    })}
  >
    <div className="message__avatar">
      <img src={avatar} alt="av" />
    </div>
    <div className="message__content">
      <MessageStatus isMe={isMe} isRead={isRead} />
      {(text || isTyping) && (
        <div className="message__content-bubble">
          {text && <p className="text">{text}</p>}
          {isTyping && (
            <div className="message__typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
      )}
      <div className="message__content-attachments">
        {attachments &&
          attachments.map((item, idx) => (
            <div className="item" key={idx}>
              <img src={item.url} alt={item.filename} />
            </div>
          ))}
      </div>
      {date && (
        <span className="message__content-date">
          <Time date={date} />
        </span>
      )}
    </div>
  </div>
);
