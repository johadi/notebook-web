import React, { createContext } from 'react';

export const AuthContext = createContext();

const { Consumer, Provider } = AuthContext;

export const withAuthContextConsumer = WrappedComponent => (
  props => (
    <Consumer>
      {
        values => <WrappedComponent {...props} {...values}/>
      }
    </Consumer>
  )
);

export const AuthContextProvider = ({ value, component, ...rest }) => {
  const Component = component;
  return (
    <Provider value={value}>
      <Component {...rest}/>
    </Provider>
  );
};
