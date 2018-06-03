import React, {Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import IndexPage from './IndexPage';
import { Noteboard } from './notes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: '#fbff71', zIndex: 1000, position: 'fixed', top: 0, left: 0 }}/>
        <Switch>
          <Route exact path="/" component={IndexPage}/>
          <Route path="/noteboard" component={Noteboard}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
