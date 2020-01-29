import React, { useState } from 'react';
import './index.scss';
import { Icon, Input } from 'antd';
import { UploadField } from '@navjobs/upload';

export const ChatInput = () => {
  const [value, setValue] = useState('');
  return (
    <div className="chat-input">
      <div className="chat-input-smile">
        <Icon type="smile" />
      </div>
      <Input onChange={e => setValue(e.target.value)} size="large" />
      <div className="chat-input-actions">
        <UploadField
          onFiles={files => console.log(files)}
          containerProps={{
            className: 'chat-input-actions-upload-btn'
          }}
          uploadProps={{
            accept: '.jpeg, .png, .jpg, .gif, .bmp',
            multiple: 'multiple'
          }}
        >
          <Icon type="camera" />
        </UploadField>

        {!value ? <Icon type="audio" /> : <Icon type="check-circle" />}
      </div>
    </div>
  );
};
