import React from 'react';
import { Empty } from 'antd';
import { Message } from '../message';

export const Messages = items => {
  return items.length ? (
    <div>
      <Message
        date="Wed Jan 15 2020 14:58:35"
        isMe={false}
        audio={
          'https://notificationsounds.com/soundfiles/c361bc7b2c033a83d663b8d9fb4be56e/file-sounds-1146-quest.mp3'
        }
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />
      <Message
        date="Wed Jan 13 2020 14:58:35"
        isMe={true}
        attachments={[
          {
            filename: 'name',
            url: 'https://source.unsplash.com/collection/190727/100x100'
          },
          {
            filename: 'name',
            url: 'https://source.unsplash.com/collection/190727/100x100'
          },
          {
            filename: 'name',
            url: 'https://source.unsplash.com/collection/190727/100x100'
          }
        ]}
        isRead={true}
        text={'Салам, Брут! Чё, как, уничтожил флот галлов?'}
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />
      <Message
        date="Wed Jan 13 2020 14:58:35"
        isMe={true}
        isRead={true}
        text={'Салам, Брут! Чё, как, уничтожил флот галлов?'}
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />
      <Message
        date="Wed Jan 13 2020 14:58:35"
        isMe={true}
        isRead={true}
        text={'Салам, Брут! Чё, как, уничтожил флот галлов?'}
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />{' '}
      <Message
        date="Wed Jan 13 2020 14:58:35"
        isMe={true}
        isRead={true}
        text={'Салам, Брут! Чё, как, уничтожил флот галлов?'}
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />
      <Message
        date="Wed Jan 13 2020 14:58:35"
        isMe={true}
        isRead={true}
        text={'Салам, Брут! Чё, как, уничтожил флот галлов?'}
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />{' '}
      <Message
        date="Wed Jan 13 2020 14:58:35"
        isMe={true}
        isRead={true}
        text={'Салам, Брут! Чё, как, уничтожил флот галлов?'}
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />{' '}
      <Message
        date="Wed Jan 13 2020 14:58:35"
        isMe={true}
        isRead={true}
        text={'Салам, Брут! Чё, как, уничтожил флот галлов?'}
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />
      <Message
        isMe={false}
        attachments={[
          {
            filename: 'name',
            url: 'https://source.unsplash.com/collection/190727/100x100'
          }
        ]}
        avatar={`https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
      />
    </div>
  ) : (
    <Empty description="Start dialog" />
  );
};
