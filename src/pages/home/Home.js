import React from 'react';
import './home.scss';
import { DialogsList } from '../../components/home/dialog-list';
import SidebarContainer from '../../components/home/dialogs/container';

export class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="chat">
          <SidebarContainer />
          <DialogsList />
        </div>
      </section>
    );
  }
}
