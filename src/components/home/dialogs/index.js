import React from 'react';
import './index.scss';
import { DialogItem } from '../dialogItem';
import orderBy from 'lodash/orderBy';
import { Empty } from 'antd';

export const Dialogs = ({ items, userId, onSelectDialog, currentDialogId }) => (
  <div className="dialogs">
    {items.length ? (
      orderBy(items, ['created_at'], ['desc']).map(item => (
        <DialogItem
          key={item._id}
          unRead={0}
          onSelectDialog={onSelectDialog}
          currentDialogId={currentDialogId}
          isMe={item.user._id === userId}
          {...item}
        />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    )}
  </div>
);
