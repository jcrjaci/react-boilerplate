import React from 'react';
import PropTypes from 'prop-types';
import './TableHeader.scss';

/** Table component
* @param {object} props Component props
* @param {array} props.headers List of headers to be displayed in table header.
*/
const TableHeader = ({ headers }) => (
  <div className="table-header">
    {headers.map(field => <div key={field}>{field}</div>)}
  </div>
);

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};

TableHeader.defaultProps = {
  headers: [],
};

export default TableHeader;
