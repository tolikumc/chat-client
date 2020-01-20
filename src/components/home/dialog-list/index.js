import React from 'react';
import './index.scss';
import { Icon } from 'antd';
import { Status } from '../status';
import { ChatInput } from '../chat-input';
import { Messages } from '../messages';

export const DialogsList = () => (
  <div className="chat__dialog">
    <div className="chat__dialog-header">
      <div />
      <div className="chat__dialog-header-center">
        <b className="chat__dialog-header-username">Петро Штахета</b>
        <div className="chat__dialog-header-status">
          <Status online={true} />
        </div>
      </div>
      <Icon type="ellipsis" style={{ fontSize: '25px' }} />
    </div>
    <div className="chat__dialog-message">
      <Messages />
    </div>
    <div className="chat__dialog-input">
      <ChatInput />
    </div>
  </div>
);
