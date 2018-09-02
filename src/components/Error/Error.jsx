import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

const Error = ({ msg }) => (
  <div className="error-msg">
    <span>{msg}</span>
  </div>
);

Error.propTypes = {
  msg: PropTypes.string,
};

Error.defaultProps = {
  msg: '',
};

export default Error;
