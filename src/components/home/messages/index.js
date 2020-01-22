import React from 'react';
import { Empty } from 'antd';
import { Message } from '../message';

export const Messages = ({ items }) => {
  return items && items.length ? (
    <div>
      {items.map((item, idx) => (
        <Message key={idx} {...item} />
      ))}
    </div>
  ) : (
    <Empty description="Start dialog" />
  );
};
