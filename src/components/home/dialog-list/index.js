import React from 'react';
import './index.scss';
import { Icon } from 'antd';

export const DialogsList = () => (
  <div className="chat__dialog">
    <div className="chat__dialog-header">
      <div className="chat__dialog-header-center">
        <b className="chat__dialog-header-username">Петро Штахета</b>
        <div className="chat__dialog-header-status">
          <div className="status status-online">online</div>
        </div>
      </div>
      <Icon type="ellipsis" />
    </div>
  </div>
);
