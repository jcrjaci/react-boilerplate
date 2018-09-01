import React from 'react';
import PropTypes from 'prop-types';
import './TableBody.scss';

const TableHeader = ({ data }) => (
  <div className="table-body">
    {data.map(({
      id, name, rank, symbol, price_usd: price,
    }) => (
      <div className="table-line" key={id}>
        <div className="rank">{rank}</div>
        <div className="symbol">{symbol}</div>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    ))}
  </div>
);

TableHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

TableHeader.defaultProps = {
  data: [],
};

export default TableHeader;
