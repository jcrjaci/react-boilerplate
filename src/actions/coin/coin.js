import { FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from '../../constants/coin';

export default function fetchCoins() {
  return async (dispatch) => {
    dispatch({ type: FETCH_COINS_REQUEST });

    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
      const payload = await response.json();
      dispatch({ type: FETCH_COINS_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: FETCH_COINS_FAILURE });
    }
  };
}
