/**
 *
 * CommentEditButton
 *
 */

import React, { Component } from 'react';
import { Button, Form, Modal } from 'antd';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CommentForm from '../CommentForm';
import { editComment } from '../../actions';

class CommentEditButton extends Component {
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
    this.props.editComment(commentData);
  };
  render() {
    const { loading } = this.state;
    const { comment } = this.props;
    return (
      <span className="comment-edit-button">
        <Button onClick={() => this.toggleModal()}>Edit Comment</Button>
        <Modal
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible}
          footer={null}
          onCancel={() => this.toggleModal()}
        >
          <h2>
            Edit Comment <strong>#{comment.id}</strong>
          </h2>
          <CommentForm
            comment={comment}
            ref={(commentform) => (this.commentform = commentform)}
            loading={loading}
            onCancel={() => this.toggleModal()}
            onSubmit={(commentData) => this.submit(commentData)}
          />
        </Modal>
      </span>
    );
  }
}
CommentEditButton.propTypes = {
  editComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  editComment: (comment) =>
    new Promise((resolve, reject) =>
      dispatch(editComment(comment, resolve, reject))),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CommentEditButton);
