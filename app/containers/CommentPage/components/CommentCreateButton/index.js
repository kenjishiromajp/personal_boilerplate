/**
 *
 * CommentCreateButton
 *
 */

import React, { Component } from 'react';
import { Button, Form, Modal } from 'antd';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CommentForm from '../CommentForm';
import { createComment } from '../../actions';

class CommentCreateButton extends Component {
  state = {
    loading: false,
    modalVisible: false,
  };
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  submit = (commentData) => {
    if (this.state.loading) {
      return;
    }
    this.setState({
      loading: true,
    });
    this.props.createComment(commentData).then(() => {
      this.setState({
        loading: false,
        modalVisible: false,
      });
      this.commentform.resetFields();
    });
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="comment-create-button">
        <Button type="primary" onClick={() => this.toggleModal()}>
          Create Comment
        </Button>
        <Modal
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible}
          footer={null}
          onCancel={() => this.toggleModal()}
        >
          <h2>Create Comment</h2>
          <CommentForm
            ref={(commentform) => (this.commentform = commentform)}
            loading={loading}
            onCancel={() => this.toggleModal()}
            onSubmit={(commentData) => this.submit(commentData)}
          />
        </Modal>
      </div>
    );
  }
}
CommentCreateButton.propTypes = {
  createComment: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) =>
    new Promise((resolve, reject) =>
      dispatch(createComment(comment, resolve, reject))),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CommentCreateButton);
