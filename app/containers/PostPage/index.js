import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
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
  componentDidMount() {
    this.props.loadPosts();
  }
  renderPosts = () => {
    const { posts } = this.props;
    if (posts === null) { return <div>Empty State</div>; }
    return posts.map((post) => <div key={post.id}>{post.title}</div>);
  }
  render() {
    return (
      <div>
        <h1>Post Page!</h1>
        <small>{this.state.name}</small>
        <Icon type="link" />
        <Button type="primary">Legal</Button>
        { this.renderPosts() }
      </div>
    );
  }
}

PostPage.propTypes = {
  posts: PropTypes.array,
  loadPosts: PropTypes.func.isRequired,
};

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
