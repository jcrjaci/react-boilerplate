import { FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from '../../constants/coin';

const initialState = {
  data: [], loading: false, error: false, total: 0,
};

function coin(state = initialState, { type, payload, error }) {
  switch (type) {
    case FETCH_COINS_REQUEST:
      return { ...state, loading: true };
    case FETCH_COINS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorType: '',
        data: payload.data ? Object.keys(payload.data).map(field => payload.data[field]) : [],
        total: payload.metadata && payload.metadata.num_cryptocurrencies
          ? payload.metadata.num_cryptocurrencies : state.total,
      };
    case FETCH_COINS_FAILURE:
      return {
        ...state, loading: false, data: [], error: true, errorType: error,
      };
    default:
      return state;
  }
}

export default coin;
