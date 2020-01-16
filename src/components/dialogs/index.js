import React from 'react';
import './index.scss';
import { DialogItem } from '../dialogItem';
import orderBy from 'lodash/orderBy';

export const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy(items, ['created_at'], ['desc']).map(item => (
      <DialogItem
        key={item._id}
        user={item.user}
        message={item}
        unRead={0}
        isMe={item.user._id === userId}
      />
    ))}
  </div>
);
