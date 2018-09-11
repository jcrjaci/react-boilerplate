import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCoins from '../../actions/coin/coin';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Pagination from '../../components/Pagination/Pagination';
import { numberIsPositive } from '../../utils/utils';

import './Home.scss';

export class Home extends Component {
  headers = ['#', 'Symbol', 'Name', 'Price USD'];

  start = 0;

  perPage = 10;

  state = { currentPage: 1 };

  static defaultProps = { data: [] };

  static propTypes = {
    fetchCoinsData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        page: PropTypes.string,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    error: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
  };

  /**
   * when the component mount the first coin fetch is called.
   * if the url is a base url then we redirect to the first page
   * @return {void}@memberof Home
   */
  componentDidMount() {
    const { match: { params }, history } = this.props;
    const { page } = params;

    const pageIsValid = numberIsPositive(page);
    this.fetchCoins(page);

    if (!pageIsValid) {
      history.push('/coins/1');
    }
  }

  /**
   * check if the page number come form props is different the one in component state
   * if so a a fetch for the new page is requested
   * @return {void}@memberof Home
   */
  componentDidUpdate() {
    const { match: { params } } = this.props;
    const { currentPage } = this.state;
    const pageChanged = Number(params.page) !== Number(currentPage);

    if (numberIsPositive(params.page) && pageChanged) {
      this.setCurrentPage(Number(params.page));
      this.fetchCoins(Number(params.page));
    }
  }

  /**
   * save current page in the component state
   * @param  {int}
   * @return {void}
   */
  setCurrentPage = (currentPage) => {
    this.setState(() => ({ currentPage }));
    console.log('passei');
  }

  /**
   * request a fetch for a specific page
   * calculate the starting number for a specific page and then request a fetch
   * for that starting number and per page number
   * @memberof Home
   */
  fetchCoins = (page) => {
    const { fetchCoinsData } = this.props;
    const pageIsValid = numberIsPositive(page);

    this.start = pageIsValid ? (page * this.perPage) - this.perPage : this.start;

    fetchCoinsData(this.start, this.perPage);
  }

  /**
   * Home container is responsible for display the result of route /
   * this container display a table with crypto currencies ranking
   * @return
   * @memberof Home
   */
  render() {
    const {
      loading, data, error, total,
    } = this.props;
    const { currentPage } = this.state;
    const renderTable = !loading && data.length > 0;

    return (
      <div>
        <Header title="Top Cryptocurrencies By Market Capitalization" />
        {error && <Error msg="Oops something went wrong." />}
        {loading && <Loading /> }
        {renderTable && (
          <Table data={data} headers={this.headers}>
            <Pagination currentPage={currentPage} totalPages={Math.round(total / this.perPage)} />
          </Table>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = { fetchCoinsData: fetchCoins };

const mapStateToProps = ({ coin }) => {
  const {
    loading, data, error, total,
  } = coin;
  return {
    loading, data, error, total,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
