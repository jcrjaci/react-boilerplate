// import { fetch } from 'whatwg-fetch';
import 'whatwg-fetch';
import { FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from '../../constants/coin';
import { numberIsZeroOrGreater } from '../../utils/utils';

export default function fetchCoins(start, limit) {
  return async (dispatch) => {
    dispatch({ type: FETCH_COINS_REQUEST });

    if (!numberIsZeroOrGreater(start) || !numberIsZeroOrGreater(limit)) {
      return dispatch({ type: FETCH_COINS_FAILURE, error: 'invalid_number' });
    }

    const endpoint = `https://api.coinmarketcap.com/v2/ticker/?start=${start}&&limit=${limit}`;
    try {
      const response = await fetch(endpoint);
      const payload = await response.json();

      return dispatch({ type: FETCH_COINS_SUCCESS, payload });
    } catch (error) {
      return dispatch({ type: FETCH_COINS_FAILURE, error: 'request_failed' });
    }
  };
}
