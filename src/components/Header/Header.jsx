import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ title }) => <div className="title">{title}</div>;

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
