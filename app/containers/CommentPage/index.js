/**
 *
 * Comment Page
 *
 */
import React, { Component } from 'react';
import { Card, Icon, Row, notification, Button, Table, Modal } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import reducer from './reducer';
import saga from './saga';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import {
  makeSelectError,
  makeSelectComments,
  makeSelectCommentsLoading,
} from './selectors';
import { loadComments, removeComment } from './actions';

import CommentCreateButton from './components/CommentCreateButton';
import CommentEditButton from './components/CommentEditButton';
import CommentList from './components/CommentList';

const { confirm } = Modal;

class CommentPage extends Component {
  componentDidMount() {
    this.props.loadComments();
  }
  componentDidUpdate() {
    if (!this.props.error) {
      return;
    }
    const style = { color: '#FF0000' };
    notification.open({
      message: 'Error',
      description: this.props.error.toString(),
      icon: <Icon type="frown-o" style={style} />,
    });
  }
  removeComment = (comment) => {
    confirm({
      okText: 'Yes',
      okType: 'danger',
      title: (
        <span>
          Do you want to delete -{' '}
          <strong>
            #{comment.id} {comment.title}
          </strong>
        </span>
      ),
      onOk: () => {
        this.props.removeComment(comment.id);
      },
    });
  };
  actionColumn = (text, comment) => (
    <span>
      <CommentEditButton comment={comment} />
      <Button type="danger" onClick={() => this.removeComment(comment)}>
        Delete
      </Button>
    </span>
  );
  renderHead() {
    return (
      <Helmet>
        <title>Comment Page</title>
      </Helmet>
    );
  }
  render() {
    const { renderHead } = this;
    const { loading, comments } = this.props;
    return (
      <div>
        {renderHead()}
        <Row type="flex" justify="space-between" align="middle">
          <h1>Comment Page</h1>
          <CommentCreateButton />
        </Row>
        <Card loading={loading}>
          <CommentList comments={comments} actionColumn={this.actionColumn} />
        </Card>
      </div>
    );
  }
}

CommentPage.propTypes = {
  error: PropTypes.object,
  comments: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadComments: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  comments: makeSelectComments(),
  loading: makeSelectCommentsLoading(),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments: () => dispatch(loadComments()),
  removeComment: (id) => dispatch(removeComment(id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'comments', reducer });
const withSaga = injectSaga({ key: 'comments', saga });
export default compose(withReducer, withSaga, withConnect)(CommentPage);
