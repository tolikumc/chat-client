import React from 'react';
import './index.scss';
import { Icon, Input } from 'antd';
import { Dialogs } from '../dialogs';

export const Sidebar = ({ items, onSearch, inputValue }) => (
  <div className="chat__sidebar">
    <div className="chat__sidebar-header">
      <div>
        <Icon type="team" />
        <span>Dialogs list</span>
      </div>

      <Icon type="form" />
    </div>
    <div className="chat__sidebar-search">
      <Input.Search
        placeholder="search contact"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    <div className="chat__sidebar-list">
      <Dialogs userId={0} items={items} />
    </div>
  </div>
);
