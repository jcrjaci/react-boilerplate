import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';

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
