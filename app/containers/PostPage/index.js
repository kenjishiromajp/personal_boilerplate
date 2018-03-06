import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

class PostPage extends Component {
  state = {
    name: '',
  }
  render() {
    return (
      <div>
        <h1>Post Page!</h1>
        <small>{this.state.name}</small>
        <Icon type="link" />
        <Button type="primary">Legal</Button>
      </div>
    );
  }
}
// const withConnect =
const withReducer = injectReducer({ key: 'pagamentoPage', reducer });
const withSaga = injectSaga({ key: 'pagamentoPage', saga });
export default compose(
  // withConnect,
  withReducer,
  withSaga
)(PostPage);
