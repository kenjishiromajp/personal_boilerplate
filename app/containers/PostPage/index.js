import React, { Component } from 'react';
import { Button, Card, Icon } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import reducer from './reducer';
import saga from './saga';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { makeSelectPosts, makeSelectPostsLoading } from './selectors';
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
  renderHead() {
    return (
      <Helmet>
        <title>Post Page</title>
      </Helmet>
    );
  }
  render() {
    const { renderHead } = this;
    const { loading } = this.props;
    return (
      <div>
        { renderHead() }
        <h1>Post Page!</h1>
        <Card loading={loading} >
          { this.renderPosts() }
        </Card>
      </div>
    );
  }
}

PostPage.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  loadPosts: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectPostsLoading(),
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
