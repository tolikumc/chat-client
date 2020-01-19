import React from 'react';
import './index.scss';
import classNames from 'classnames';
// import { Time } from '../time';
import { MessageStatus } from '../messageStatus';
import { Avatar } from '../avatar';
// import format from 'date-fns/format';
// import isToday from 'date-fns/isToday';

// const getMessageTime = created_at => {
//   console.log(isToday(new Date(created_at)));
//   if (isToday(new Date(created_at))) {
//     return format(new Date(created_at), 'HH:mm');
//   } else {
//     return format(new Date(created_at), 'dd:MM:yyyy');
//   }
// };

export const DialogItem = ({ unRead, text, user, isMe }) => (
  <div
    className={classNames('dialogs__item', {
      'dialogs__item--online': user.online
    })}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullName}</b>
        {/*<span>{<Time date={getMessageTime(message.created_at)} />}</span>*/}
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {unRead > 0 && (
          <div className="count">
            <span>{unRead > 9 ? '+9' : unRead}</span>
          </div>
        )}
        {isMe && <MessageStatus isRead={true} isMe={true} />}
      </div>
    </div>
  </div>
);
