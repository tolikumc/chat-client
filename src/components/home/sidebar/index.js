import React from 'react';
import './index.scss';
import { Icon, Input } from 'antd';
import { Dialogs } from '../dialogs';

export const Sidebar = () => (
  <div className="chat__sidebar">
    <div className="chat__sidebar-header">
      <div>
        <Icon type="team" />
        <span>Dialogs list</span>
      </div>

      <Icon type="form" />
    </div>
    <div className="chat__sidebar-search">
      <Input.Search placeholder="search contact" />
    </div>
    <div className="chat__sidebar-list">
      <Dialogs
        userId={0}
        items={[
          {
            _id: Math.random(),

            text:
              'Consequuntur dolorem expedita in, ipsam ipsum maiores molestias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: '3rwea',
              fullName: 'Artem Maslov',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: 'bdfksaj',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: 'asdkfhgaskdfjs',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: '12khds',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: 'lkjsldu',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: '/,mvbc.m.',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: 'qirsaj',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: 'lskdlygoewpa',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: 'asldajfhaj',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: '0-98f-s',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          },
          {
            _id: Math.random(),

            text: 'tias nulla porro rem soluta, suscipit!',
            created_at: 'Thu Jan 16 2020 21:59:37',
            user: {
              _id: 't628-98f-s',
              fullName: 'Петро Штахета',
              avatar: ''
            }
          }
        ]}
      />
    </div>
  </div>
);
