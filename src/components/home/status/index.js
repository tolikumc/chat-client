import React from 'react';
import classNames from 'classnames';

export const Status = ({ online }) => (
  <div className={classNames('status', { 'status-online': online })}>
    {online ? 'online' : 'offline'}
  </div>
);
