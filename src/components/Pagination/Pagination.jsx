import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pagination.scss';

class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  };

  pages = 3;

  getPageLink = (current, page, text = page) => <Link className={`${current === page ? 'active' : ''}`} key={page} to={`/coins/${page}`}>{text}</Link>;

  getBeforePages = (current) => {
    // Number of before pages is 3 unless the current page is lower than 3
    const beforePages = current > this.pages ? this.pages : current - 1;
    // create an array with the number of before pages
    const pages = Array.from({ length: beforePages }, (v, i) => i).sort((a, b) => a < b);

    return pages.map(page => this.getPageLink(current, current - page - 1 ));
  }

  getAfterPages = (current, total) => {
    // Number of after pages is 3 unless the current page more  3 is higher than the total pages
    const afterPages = total >= current + this.pages ? this.pages : total - current;
    // create an array with the number of after pages
    const pages = Array.from({ length: afterPages }, (v, i) => i);

    return pages.map(page => this.getPageLink(current, current + page + 1));
  }

  getPagesLinks = (current, total) => {
    const beforePages = current > 1 ? this.getBeforePages(current) : [];
    const currentPageLink = this.getPageLink(current, current);
    const afterPages = current <= total ? this.getAfterPages(current, total) : [];

    return [...beforePages, currentPageLink, ...afterPages];
  }

  getPreviousPageLink = currentPage => (currentPage > 1 ? this.getPageLink(currentPage, currentPage - 1, '\u276E') : null);

  getNextPageLink = (currentPage, totalPages) => (currentPage !== totalPages ? this.getPageLink(currentPage, currentPage + 1, '\u276F') : null);

  // https://codepen.io/andrewichert/pen/bZXBbO
  render() {
    const { currentPage, totalPages } = this.props;
    const renderPrevious = currentPage > 1;
    const renderLast = currentPage !== totalPages;

    return (
      <div className="pagination">
        {this.getPreviousPageLink(currentPage)}
        {renderPrevious && this.getPageLink(currentPage, 1, 1)}
        <span>...</span>
        {this.getPagesLinks(currentPage, totalPages)}
        <span>...</span>
        {renderLast && this.getPageLink(currentPage, totalPages, totalPages)}
        {this.getNextPageLink(currentPage)}
      </div>
    );
  }
}

export default Pagination;
