import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const fetch = async (
  requestConfig,
  {
    dispatch, actionType, loaderScope, canDispatchResult = true
  },
  successCallback,
  errorCallback
) => {
  try {
    dispatch(showLoading(loaderScope));
    const response = await axios(requestConfig);
    dispatch(hideLoading(loaderScope));

    // We always return the success result as callback to the user
    if (successCallback && typeof successCallback === 'function') {
      successCallback(response);
    }

    if (canDispatchResult) {
      dispatchResult(dispatch, `${actionType}_SUCCESSFUL`, response.data);
    }

    // We always return the success result as promise to the user
    return Promise.resolve(response);
  } catch (err) {
    let errorData = err.response.data;

    if (err.response.status === 500) {
      errorData = 'Internal Server Error';
    }

    dispatch(hideLoading(loaderScope));
    // we always return the error as callback to the user
    if (errorCallback && typeof errorCallback === 'function') {
      errorCallback(err);
    }

    // We only return the error as promise when the user doesn't enable dispatching
    if (!canDispatchResult) {
      return Promise.reject(err);
    }

    dispatchResult(
      dispatch,
      `${actionType}_UNSUCCESSFUL`,
      {
        error: {
          data: errorData,
          status: err.response.status,
          action: actionType
        }
      }
    );
  }
};

const dispatchResult = (dispatch, type, payload) => {
  dispatch({ type, payload });
};

export { fetch };
