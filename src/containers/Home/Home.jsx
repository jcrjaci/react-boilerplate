import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCoins from '../../actions/coin/coin';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Pagination from '../../components/Pagination/Pagination';

import './Home.scss';

class Home extends Component {
  headers = ['#', 'Symbol', 'Name', 'Price USD'];
  start = 0;
  perPage = 10;
  currentPage = 85;

  static defaultProps = { data: [], loading: false };
  static propTypes = {
    fetchCoinsData: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
  };

  componentDidMount() {
    this.handleRedirect();
    this.fetchCoins(this.start);
  }

  handleRedirect = () => {
   const { match: { params }, history } = this.props;
    const { page } = params;

    if (typeof page === 'undefined') {
      history.push('/coins/1');
    }
  }

  fetchCoins = (start = this.start) => {
    const { fetchCoinsData } = this.props;

    fetchCoinsData(start, this.perPage);
  }
  /**
   * Home container is responsible for display the result of route /
   * this container display a table with crypto currencies ranking
   * @return 
   * @memberof Home
   */
  render() {
    const { loading, data, error, total } = this.props;
    const renderTable = !loading && data.length > 0;

    return (
      <div>
        <Header title="LIST OF TOP 100 crypto currencies" />
        {error && <Error msg="Oops something went wrong."/>}
        {loading && <Loading /> }
        {renderTable && 
          <Table data={data} headers={this.headers}>
            <Pagination currentPage={this.currentPage} perPage={this.perPage} total={total} action={this.fetchCoins}/>
          </Table>
          }
      </div>
    );
  }
}

const mapDispatchToProps = { fetchCoinsData: fetchCoins };

const mapStateToProps = ({ coin }) => {
  const { loading, data, error, total } = coin;
  return { loading, data, error, total };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
