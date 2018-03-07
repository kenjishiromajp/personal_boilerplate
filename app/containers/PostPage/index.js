import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import saga from './saga';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { makeSelectPosts } from './selectors';
import { loadPosts } from './actions';

class PostPage extends Component {
  state = {
    name: '',
  };
  componentDidMount(){
    this.props.loadPosts();
  }
  render() {
    return (
      <div>
        <h1>Post Page!</h1>
        <small>{this.state.name}</small>
        <Icon type="link" />
        <Button type="primary">Legal</Button>
        {this.props.posts.map((post) => <div>{post.title}</div>)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(loadPosts()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'posts', reducer });
const withSaga = injectSaga({ key: 'posts', saga });
export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostPage);
