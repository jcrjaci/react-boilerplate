import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Pagination extends Component {

  state = {
    totalPages: this.props.total /this.props.perPage,
    currentPage: this.props.page,
  };

  getPageLink = (page) => <Link key={page} to={`/coins/${page}`}>{page}</Link>;

  getBeforePages = (current) => {
    const total = current > 3 ? 3 : current;
    const pages = Array.from({ length: total }, (v, i) => i).sort(( a, b) => a < b);
      
    return pages.map(page => this.getPageLink(current - page - 1));

  }

  getAfterPages = (current, total_1) =>  {
    const total = total_1 >= current + 3 ? 3 : total_1 - current;
    const pages = Array.from({ length: total }, (v, i) => i);

    return pages.map(page => this.getPageLink(current + page + 1));
  }

  getPagesLinks = (current, total) => {

    const beforePages = this.getBeforePages(current);
    const currentPageLink = this.getPageLink(current);
    const afterPages = this.getAfterPages(current, total);

    return [...beforePages, currentPageLink, ...afterPages];

  }

  render() {
    const { totalPages } = this.state;
    const { currentPage } = this.props;
    const renderPrevious = currentPage > 1;
    const renderLast = currentPage !== totalPages;

    return (
      <div>
        <Link to="/coins/1">First</Link>
        {renderPrevious && <Link to={`/coins/${currentPage - 1}`}>Previous</Link>}
        {this.getPagesLinks(currentPage, totalPages)}
        {renderLast && <Link to={`/coins/${currentPage + 1}`}>Next</Link>}
        <Link to={`/coins/${totalPages}`}>Last</Link>
      </div>
    );
  }
}


Pagination.propTypes = {
  msg: PropTypes.string,
};

Pagination.defaultProps = {
  msg: '',
};

export default Pagination;
