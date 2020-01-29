import React, { useState } from 'react';
import './index.scss';
import { Icon, Input } from 'antd';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

export const ChatInput = () => {
  const [value, setValue] = useState('');
  const [emojiVisible, setEmojiVisible] = useState(false);
  return (
    <div className="chat-input">
      <div className="chat-input-smile">
        {emojiVisible && (
          <div className="chat-input-emoji-picker">
            <Picker set="emojione" />
          </div>
        )}

        <Icon type="smile" onClick={() => setEmojiVisible(!emojiVisible)} />
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
