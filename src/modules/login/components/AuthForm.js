import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Button } from '../../../components/button';
import { Link } from 'react-router-dom';
import { WhiteBlock } from '../../../components/white-block';
import validateField from '../../../utils/helpers/validateField';

export const LoginForm = props => {
  const { touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div className="auth__content">
      <div className="auth__content-top">
        <h2>Sign in </h2>
        <p>Please sign in your account</p>
      </div>
      <WhiteBlock>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Item
            validateStatus={validateField('email', touched, errors)}
            help={!touched.email ? '' : errors.email}
          >
            <Input
              id="email"
              prefix={
                <Icon type="mail" style={{ color: 'rgba(0, 0, 0, 0.25)', }} />
              }
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validateField('password', touched, errors)}
            help={!touched.password ? '' : errors.password}
          >
            <Input
              id="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={
                <Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25)', }} />
              }
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="button__large"
              type="primary"
              onClick={handleSubmit}
            >
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
};
