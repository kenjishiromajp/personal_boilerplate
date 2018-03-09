import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <div className="DefaultLayout">
        <div className="Header">Header</div>
        <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )}
  />
);

DefaultLayout.propTypes = {
  component: PropTypes.instanceOf(React.Component).isRequired,
};

export default DefaultLayout;
