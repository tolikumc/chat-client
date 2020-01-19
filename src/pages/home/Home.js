import React from 'react';
import './home.scss';
import { Sidebar } from '../../components/home/sidebar';
import { DialogsList } from '../../components/home/dialog-list';

export class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="chat">
          <Sidebar />
          <DialogsList />
        </div>
      </section>
    );
  }
}
