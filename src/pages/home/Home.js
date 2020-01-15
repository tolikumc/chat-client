import React from 'react';
import './home.scss';
import { Message } from '../../components/message';

export class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <Message
          date="Wed Jan 15 2020 14:58:35"
          text={'Салам, Брут! Чё, как, уничтожил флот галлов?'}
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
      </section>
    );
  }
}
