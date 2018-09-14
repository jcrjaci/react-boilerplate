import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

/** Header component
* @param {object} props Component props
* @param {String} props.title Title to display in header.
*/
const Header = ({ title }) => <header className="title">{title}</header>;

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
