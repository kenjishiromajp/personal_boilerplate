/**
 *
 * PostForm
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Row } from 'antd';
import { compose } from 'redux';
import './style.less';

const FormItem = Form.Item;

class PostForm extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  handleCancel = () => {
    this.props.onCancel();
  };
  handleCreate = () => {
    if (this.hasErrors()) {
      return;
    }
    const postData = this.props.form.getFieldsValue();
    this.props.onCreate(postData);
    return false;
  };
  hasErrors() {
    const errors = this.props.form.getFieldsError();
    return Object.keys(errors).some((key) => errors[key]);
  }
  render() {
    const {
      getFieldDecorator,
      isFieldTouched,
      getFieldError,
    } = this.props.form;
    const valid = !this.hasErrors();
    const titleError = isFieldTouched('title') && getFieldError('title');
    const descriptionError =
      isFieldTouched('description') && getFieldError('description');
    const { loading } = this.props;
    return (
      <div className="post-form">
        <Form
          onSubmit={(ev) => {
            ev.preventDefault();
            this.handleCreate();
          }}
          className="login-form"
        >
          <FormItem
            validateStatus={titleError ? 'error' : ''}
            help={titleError || ''}
          >
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please insert a title!' }],
            })(<Input placeholder="Title" />)}
          </FormItem>
          <FormItem
            validateStatus={descriptionError ? 'error' : ''}
            help={descriptionError || ''}
          >
            {getFieldDecorator('description', {
              rules: [
                { required: true, message: 'Please insert a Description!' },
              ],
            })(<Input.TextArea placeholder="Description" />)}
          </FormItem>
          <Row type="flex" justify="end">
            <Button onClick={() => this.handleCancel()}>Cancel</Button>
            <Button
              loading={loading}
              disabled={!valid}
              onClick={() => this.handleCreate()}
              type="primary"
            >
              Create
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}

PostForm.propTypes = {
  form: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default compose(Form.create())(PostForm);
