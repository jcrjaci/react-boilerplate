import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pagination.scss';

class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  };

  getCollapsed = () => <span>...</span>;

  getFirstPage = () => <Link key={1} to={`/coins/${1}`}>{1}</Link>;

  getCurrentPage = page => <Link key={page} className="active" to={`/coins/${page}`}>{page}</Link>;

  getPreviousPage = page => <Link key={page - 1} to={`/coins/${page - 1}`}>{page - 1 }</Link>;

  getNextPage = page => <Link key={page + 1} to={`/coins/${page + 1}`}>{page + 1 }</Link>;

  getLastPage = page => <Link key={page} to={`/coins/${page}`}>{page}</Link>;

  getPreviousButton = page => <Link key="prev" className="prev" to={`/coins/${page - 1}`}>{'\u276E'}</Link>;

  getNextButton = page => <Link key="next" className="next" to={`/coins/${page + 1}`}>{'\u276F'}</Link>;


  getPreviousSection = currentPage => (currentPage > 1 && (
    <React.Fragment>
      {this.getPreviousButton(currentPage)}
      {this.getFirstPage()}
    </React.Fragment>
  ));

  getCurrentSection = (currentPage, totalPages) => (
    <React.Fragment>
      {currentPage > 3 && this.getCollapsed()}
      {currentPage > 2 && this.getPreviousPage(currentPage)}
      {this.getCurrentPage(currentPage)}
      {currentPage < totalPages - 1 && this.getNextPage(currentPage)}
      {currentPage < totalPages - 1 && this.getCollapsed()}
    </React.Fragment>
  );

  getNextSection = (currentPage, totalPages) => (currentPage !== totalPages && (
    <React.Fragment>
      {this.getLastPage(totalPages)}
      {this.getNextButton(currentPage)}
    </React.Fragment>
  ));

  render() {
    const { currentPage, totalPages } = this.props;

    return (
      <div className="pagination">
        {this.getPreviousSection(currentPage)}
        {this.getCurrentSection(currentPage, totalPages)}
        {this.getNextSection(currentPage, totalPages)}
      </div>
    );
  }
}

export default Pagination;
