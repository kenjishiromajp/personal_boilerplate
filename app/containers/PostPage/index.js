import React, { Component } from 'react';
import {Button, Icon} from 'antd';

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
export default PostPage;
