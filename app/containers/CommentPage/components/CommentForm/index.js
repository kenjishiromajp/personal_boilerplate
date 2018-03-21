/**
 *
 * CommentForm
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Row } from 'antd';
import { compose } from 'redux';

const FormItem = Form.Item;

class CommentForm extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  getError(prop) {
    const { isFieldTouched, getFieldError } = this.props.form;
    return isFieldTouched(prop) && getFieldError(prop);
  }
  hasErrors() {
    const errors = this.props.form.getFieldsError();
    return Object.keys(errors).some((key) => errors[key]);
  }
  handleCancel = () => {
    this.props.onCancel();
  };
  handleSubmit = () => {
    if (this.hasErrors()) {
      return;
    }
    const commentData = this.props.comment
      ? { ...this.props.form.getFieldsValue(), id: this.props.comment.id }
      : this.props.form.getFieldsValue();
    this.props.onSubmit(commentData);
    return false;
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const valid = !this.hasErrors();
    const { loading } = this.props;
    const titleError = this.getError('title');
    const descriptionError = this.getError('description');
    return (
      <div className="comment-form">
        <Form
          onSubmit={(ev) => {
            ev.preventDefault();
            this.handleSubmit();
          }}
          className="comment-form"
        >
          <Row type="flex" justify="end">
            <Button onClick={() => this.handleCancel()}>Cancel</Button>
            <Button
              loading={loading}
              disabled={!valid}
              onClick={() => this.handleSubmit()}
              type="primary"
            >
              {this.props.comment ? 'Edit' : 'Create'}
            </Button>
          </Row>
        </Form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  form: PropTypes.object.isRequired,
  comment: PropTypes.object,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const withFormCreate = Form.create({
  mapPropsToFields({ comment }) {
    return comment
      ? {
        title: Form.createFormField({ value: comment.title }),
        description: Form.createFormField({ value: comment.description }),
      }
      : {};
  },
});
export default compose(withFormCreate)(CommentForm);
