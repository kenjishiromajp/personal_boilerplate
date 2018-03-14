/**
*
* LoginPage
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import './styles.less';
import { Button, Checkbox, Form, Icon, Input } from "antd";
import { loginUser } from "./actions";
const FormItem = Form.Item;

class LoginPage extends Component {
  state = {
  };
  renderHead() {
    return (
      <Helmet>
        <title>LoginPage</title>
      </Helmet>
    );
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        this.props.loginUser(username, password);
      }
    });
  }
  render() {
    const { renderHead } = this;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        { renderHead() }
        <h1>LoginPage</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

LoginPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, password) => dispatch(loginUser(username, password))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'loginPages', reducer });
const withSaga = injectSaga({ key: 'loginPages', saga });
export default compose(
  Form.create(),
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
