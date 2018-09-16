import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';

/** Table component
* @param {object} props Component props
* @param {array} props.data list of data to display in table body.
* @param {array} props.headers List of headers to be displayed in table header.
* @param {HTMLElement} props.children Children node to display after the table body.
*/
const Table = ({ data, headers, children }) => (
  <div className="table-container">
    <TableHeader headers={headers} />
    <TableBody data={data} />
    {children}
  </div>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
};

Table.defaultProps = {
  children: null,
};

export default Table;
