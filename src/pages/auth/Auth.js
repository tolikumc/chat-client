import React from 'react';
import './auth.scss';
import { Route } from 'react-router';
import RegisterForm from '../../modules/register/container/RegisterForm';
import LoginForm from '../../modules/login/container/LoginForm';

export class Auth extends React.Component {
  render() {
    return (
      <section className="auth">
        <Route path={['/', '/login']} component={LoginForm} exact />
        <Route path="/registration" component={RegisterForm} />
      </section>
    );
  }
}
