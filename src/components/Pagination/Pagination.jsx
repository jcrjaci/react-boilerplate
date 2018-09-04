import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pagination.scss';

class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  };


  getPageLink = (current, page, text = page) => <Link className={`${current === page ? 'active' : ''}`} key={page} to={`/coins/${page}`}>{text}</Link>;

  getPreviousPageLink = currentPage => (currentPage > 1 ? this.getPageLink(currentPage, currentPage - 1, '\u276E') : null);

  getNextPageLink = (currentPage, totalPages) => (currentPage !== totalPages ? this.getPageLink(currentPage, currentPage + 1, '\u276F') : null);

  render() {
    const { currentPage, totalPages } = this.props;
    const renderPrevious = currentPage > 2;
    const renderFirst = currentPage > 1;
    const renderLast = currentPage !== totalPages;
    const renderPreviousLast = currentPage < totalPages - 1;

    return (
      <div className="pagination">
        {this.getPreviousPageLink(currentPage)}
        {renderFirst && this.getPageLink(currentPage, 1)}
        {renderPrevious && <span>...</span>}
        {renderPrevious && this.getPageLink(currentPage, currentPage - 1)}
        {this.getPageLink(currentPage, currentPage)}
        {renderPreviousLast && this.getPageLink(currentPage, currentPage + 1)}
        {renderPreviousLast && <span>...</span>}
        {renderLast && this.getPageLink(currentPage, totalPages)}
        {this.getNextPageLink(currentPage, totalPages)}
      </div>
    );
  }
}

export default Pagination;
