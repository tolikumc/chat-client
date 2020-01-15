import React from 'react';
import './index.scss';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

export const Button = props => (
  <BaseButton {...props} className={classNames('button', props.className)} />
);
