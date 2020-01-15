import React, { FunctionComponent } from 'react';
import './index.scss';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

type ButtonProps = {
  children: string;
  className: string;
  type: 'primary';
};

export const Button: FunctionComponent<ButtonProps> = props => (
  <BaseButton {...props} className={classNames('button', props.className)} />
);
