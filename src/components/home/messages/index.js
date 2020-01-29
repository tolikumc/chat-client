import React from 'react';
import { Empty, Spin } from 'antd';
import { Message } from '../message';
import classNames from 'classnames'

export const Messages = ({ isLoading, items, blockRef }) => {
  return (
    <div ref={blockRef} className={classNames('messages', {'messages--loading': isLoading})}>
      {isLoading && !items  ? (
        <Spin tip="Loading messages.." size='large'/>
      ) : items && items.length ? (
        items.map((item, idx) => <Message key={idx} {...item} />)
      ) : (
        <Empty description="Start dialog" />
      )}
    </div>
  );
};
