import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import { Noteboard } from './notes';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/noteboard" component={Noteboard}/>
      </Switch>
    );
  }
}

export default App;
