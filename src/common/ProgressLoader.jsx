import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

export const ProgressLoader = ({style, ...rest}) => (
  <LoadingBar
    style={ {
      backgroundColor: 'red', zIndex: 1000, position: 'fixed', top: 0, left: 0, ...style
    } }
    {...rest}
  />
);
