import React from 'react';
import './index.scss';
import classNames from 'classnames';

export const WhiteBlock = ({ children, className }) => (
  <div className={classNames('block', className)}>{children}</div>
);
