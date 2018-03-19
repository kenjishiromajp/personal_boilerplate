/**
*
* PostForm
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import './style.less';

const FormItem = Form.Item;

class PostForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="post-form">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please insert a title!' }],
            })(<Input placeholder="Title" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Please insert a Description!' }],
            })(<Input.TextArea placeholder="Description" />)}
          </FormItem>
        </Form>
      </div>
    );
  }
}

PostForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default PostForm;
