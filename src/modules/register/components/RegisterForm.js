import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Button } from '../../../components/button';
import { Link } from 'react-router-dom';
import { WhiteBlock } from '../../../components/white-block';
import validateField from '../../../utils/helpers/validateField';

const success = false;

export const RegisterForm = props => {
  const { touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div className="auth__content">
      <div className="auth__content-top">
        <h2>Registration </h2>
        <p>You need to sign up to chat</p>
      </div>
      <WhiteBlock>
        {!success ? (
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
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0, 0, 0, 0.25)', }} />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField('password', touched, errors)}
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
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25)', }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="button__large"
                type="primary"
                onClick={handleSubmit}
              >
                sign up
              </Button>
            </Form.Item>
            <Link to={'/login'} className="auth__register">
              Sigh in
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <Icon
                type="info-circle"
                style={{ fontSize: '50px', }}
                theme="twoTone"
              />
            </div>
            <h3>Verify your account</h3>
            <p>
              An email has been sent to your mail with a link to the account
              confirmation.
            </p>
          </div>
        )}
      </WhiteBlock>
    </div>
  );
};
