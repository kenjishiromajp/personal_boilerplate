/**
*
* TapeteVermelho
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { makeSelectTapeteVermelhos } from './selectors';
import { loadTapeteVermelhos } from './actions';

class TapeteVermelho extends Component {
  state = {
  };
  componentDidMount() {
    // this.props.loadTapeteVermelhos();
  }
  render() {
    return (
      <div>
        <h1>TapeteVermelho</h1>
      </div>
    );
  }
}

TapeteVermelho.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectTapeteVermelhos(),
});

const mapDispatchToProps = (dispatch) => ({
  loadTapeteVermelhos: () => dispatch(loadTapeteVermelhos()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'tapeteVermelhos', reducer });
const withSaga = injectSaga({ key: 'tapeteVermelhos', saga });
export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TapeteVermelho);
