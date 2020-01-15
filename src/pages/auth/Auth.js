import React from 'react';
import './auth.scss';
import LoginForm from '../../modules/login/components/AuthForm';
import { Route } from 'react-router';
import RegisterForm from '../../modules/register/components/RegisterForm';

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
