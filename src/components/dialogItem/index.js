import React from 'react';
import './index.scss';
import classNames from 'classnames';
// import { Time } from '../time';
import { MessageStatus } from '../messageStatus';

const getAvatar = avatar => {
  if (avatar) {
    return <img src={`${avatar}`} alt={`avatar`} />;
  } else {
    //ssss
  }
};

export const DialogItem = ({ user, unRead }) => (
  <div
    className={classNames('dialogs__item', {
      'dialogs__item--online': user.online
    })}
  >
    <div className="dialogs__item-avatar">
      {getAvatar('https://source.unsplash.com/collection/190727/100x100')}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Artem Maslov</b>
        <span>
          {/*<Time date={new Date()} />*/}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
          sit amet
        </p>
        {unRead ? (
          <div className="count">
            <span>{unRead > 9 ? '+9' : unRead}</span>
          </div>
        ) : (
          <MessageStatus isRead={true} isMe={true} />
        )}
      </div>
    </div>
  </div>
);
