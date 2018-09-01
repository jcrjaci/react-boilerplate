import { FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from '../../constants/coin';

const initialState = { data: [], loading: false, error: false };

function coin(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_COINS_REQUEST:
      return { ...state, loading: true };
    case FETCH_COINS_SUCCESS:
      return { ...state, loading: false, data: payload };
    case FETCH_COINS_FAILURE:
      return {
        ...state, loading: false, data: [], error: true,
      };
    default:
      return state;
  }
}

export default coin;
