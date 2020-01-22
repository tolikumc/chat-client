import React from 'react';
import './index.scss';
import classNames from 'classnames';
import { Time } from '../time';
import { MessageStatus } from '../messageStatus';
import { AudioMessage } from '../audio-message';
import { Avatar } from '../avatar';

export const Message = ({
  user,
  text,
  date,
  isMe,
  isRead,
  attachments,
  isTyping,
  audio
}) => {
  return (
    <div
      className={classNames('message', {
        'message--isMe': isMe,
        'message--isTyping': isTyping,
        'message--image': attachments && attachments.length === 1,
        'message--isAudio': audio
      })}
    >
      <div className="message__avatar">
        <Avatar user={user} />
      </div>
      <div className="message__content">
        <MessageStatus isMe={isMe} isRead={isRead} />
        {(audio || text || isTyping) && (
          <div className="message__content-bubble">
            {text && <p className="text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
            {audio && <AudioMessage audio={audio} />}
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
};
