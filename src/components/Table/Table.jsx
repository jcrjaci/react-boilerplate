import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';

const Table = ({ data, headers }) => (
  <div className="table-container">
    <TableHeader headers={headers} />
    <TableBody data={data} />
  </div>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(PropTypes.string),
};

Table.defaultProps = {
  data: [],
  headers: [],
};

export default Table;
