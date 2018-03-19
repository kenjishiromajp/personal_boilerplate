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
import { createPost } from '../../actions';

class PostCreateButton extends Component {
  state={
    loading: false,
    modalVisible: false,
  }
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }
  submit = () => {
    const fields = this.props.form.getFieldsValue();
    this.setState({
      loading: true,
    });

    this.props.createPost(fields);
  }
  render() {
    return (
      <div className="post-create-button">
        <Button type="primary" onClick={() => this.toggleModal()}>Create Post</Button>
        <Modal
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible}
          onOk={() => this.submit()}
          onCancel={() => this.toggleModal()}
        >
          <h2>Create Post</h2>
          <PostForm form={this.props.form} />
        </Modal>
      </div>
    );
  }
}
PostCreateButton.propTypes = {
  form: PropTypes.object.isRequired,
  createPost: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  Form.create(),
  withConnect,
)(PostCreateButton);
