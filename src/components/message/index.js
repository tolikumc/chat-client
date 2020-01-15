import React from 'react';
import './index.scss';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { uk } from 'date-fns/locale';
import classNames from 'classnames';
import CombinedShape from '../../assets/img/CombinedShape.svg';
import Shape from '../../assets/img/Shape.svg';

export const Message = ({ avatar, text, date, isMe, isRead, attachments }) =>
  console.log(date) || (
    <div className={classNames('message', { 'message--isMe': isMe })}>
      <div className="message__avatar">
        <img src={avatar} alt="av" />
      </div>
      <div className="message__content">
        {isMe && isRead ? (
          <img
            src={CombinedShape}
            alt="read"
            className="message__content-read"
          />
        ) : (
          <img src={Shape} alt="read" className="message__content-read" />
        )}
        <div className="message__content-bubble">
          <p className="text">{text}</p>
        </div>
        <div className="message__content-attachments">
          {attachments &&
            attachments.map((item, idx) => (
              <div className="item" key={idx}>
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        <span className="message__content-date">
          {formatDistanceToNow(new Date(date), {
            locale: uk,
            addSuffix: true
          })}
        </span>
      </div>
    </div>
  );
