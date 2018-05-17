/**
 *
 * PostCreateButton
 *
 */

import React, { Component } from 'react';
import { Button, Form, Modal } from 'antd';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PostForm from '../PostForm';
import './style.less';
import { updatePost } from '../../actions';

class PostCreateButton extends Component {
  state = {
    loading: false,
    modalVisible: false,
  };
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  submit = (postData) => {
    if (this.state.loading) {
      return;
    }
    this.setState({
      loading: true,
    });
    this.props.updatePost(postData).then(() => {
      this.setState({
        loading: false,
        modalVisible: false,
      });
    });
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="post-create-button">
        <Button type="primary" onClick={() => this.toggleModal()}>
          Create Post
        </Button>
        <Modal
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible}
          footer={null}
          onCancel={() => this.toggleModal()}
        >
          <h2>Create Post</h2>
          <PostForm
            ref={(postform) => (this.postform = postform)}
            loading={loading}
            onCancel={() => this.toggleModal()}
            onCreate={(postData) => this.submit(postData)}
          />
        </Modal>
      </div>
    );
  }
}
PostCreateButton.propTypes = {
  updatePost: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  updatePost: (post) =>
    new Promise((resolve, reject) =>
      dispatch(updatePost(post, resolve, reject))),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PostCreateButton);
