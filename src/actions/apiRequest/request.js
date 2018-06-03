import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const fetch = (requestConfig, dispatch, actionType, loaderScope) => {
  dispatch(showLoading(loaderScope));

  axios(requestConfig)
    .then((response) => {
      dispatch(hideLoading(loaderScope));
      dispatch({
        type: `${actionType}_SUCCESSFUL`,
        payload: response.data
      });
    })
    .catch((err) => {
      dispatch(hideLoading(loaderScope));
      let errorData = err.response.data;

      if (err.response.status === 500) {
        errorData = 'Internal Server Error';
      }

      dispatch({
        type: `${actionType}_UNSUCCESSFUL`,
        payload: { error: { data: errorData, status: err.response.status } }
      });
    });
};

const fetchWithResult = (requestConfig, dispatch, loaderScope) => {
  dispatch(showLoading(loaderScope));
  return axios(requestConfig)
    .then((response) => {
      dispatch(hideLoading(loaderScope));
      return Promise.resolve(response);
    })
    .catch((err) => {
      dispatch(hideLoading(loaderScope));
      return Promise.reject(err);
    });
};

export { fetch, fetchWithResult };
