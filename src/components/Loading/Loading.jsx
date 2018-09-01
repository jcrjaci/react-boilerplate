import React from 'react';
import PropTypes from 'prop-types';

import './Loading.scss';

const Loading = ({ className }) => (
  <div className={`loading ${className}`}>
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  </div>
);

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
};

export default Loading;
