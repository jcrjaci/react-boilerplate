import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCoins from '../../actions/coin/coin';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import './Home.scss';

class Home extends Component {
  headers = ['#', 'Symbol', 'Name', 'Price USD'];
  perPage = 10;
  start = 10;

  static defaultProps = { data: [], loading: false };
  static propTypes = {
    fetchCoinsData: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
  };

  componentDidMount() {
    const { fetchCoinsData } = this.props;
    fetchCoinsData(this.start, this.perPage);
  }

  /**
   * Home container is responsible for display the result of route /
   * this container display a table with
   * @return 
   * @memberof Home
   */
  render() {
    const { loading, data, error } = this.props;
    
    return (
      <div>
        <Header title="LIST OF TOP 100 Cryptocurrencies" />
        {error && <Error msg="Oops something went wrong."/>}
        {loading ? <Loading /> : <Table data={data} headers={this.headers} loading={loading} />
        }
      </div>
    );
  }
}

const mapDispatchToProps = { fetchCoinsData: fetchCoins };

const mapStateToProps = ({ coin }) => {
  const { loading, data, error } = coin;
  return { loading, data, error };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
