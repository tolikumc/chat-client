import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Button } from '../../../components/button';
import { Link } from 'react-router-dom';
import { WhiteBlock } from '../../../components/white-block';

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="auth__content">
        <div className="auth__content-top">
          <h2>Sign in </h2>
          <p>Please sign in your account</p>
        </div>
        <WhiteBlock>
          <Form className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button className="button__large" type="primary">
                sign in
              </Button>
            </Form.Item>
            <Link to={'/registration'} className="auth__register">
              Sigh Up
            </Link>
          </Form>
        </WhiteBlock>
      </div>
    );
  }
}
