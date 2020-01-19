import React, { useState } from 'react';
import './index.scss';
import { Icon, Input } from 'antd';

export const ChatInput = () => {
  const [value, setValue] = useState('');
  return (
    <div className="chat-input">
      <div className="chat-input-smile">
        <Icon type="smile" />
      </div>
      <Input onChange={e => setValue(e.target.value)} size="large" />
      <div className="chat-input-actions">
        <Icon type="camera" />
        {!value ? <Icon type="audio" /> : <Icon type="check-circle" />}
      </div>
    </div>
  );
};
