import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCoins from '../../actions/coin/coin';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Loading from '../../components/Loading/Loading';
import './Home.scss';

class Home extends Component {
  headers = ['#', 'Symbol', 'Name', 'Price USD'];

  componentDidMount() {
    const { fetchCoinsData } = this.props;
    fetchCoinsData();
  }

  render() {
    const { loading, data } = this.props;
    return (
      <div>
        <Header title="LIST OF TOP 100 Cryptocurrencies" />
        {loading ? <Loading /> : <Table data={data} headers={this.headers} loading={loading} />
        }
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCoinsData: fetchCoins,
};

function mapStateToProps({ coin }) {
  const { loading, data, error } = coin;
  return { loading, data, error };
}

Home.defaultProps = {
  data: [],
  loading: false,
};

Home.propTypes = {
  fetchCoinsData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
