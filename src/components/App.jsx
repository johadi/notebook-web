import React, {Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IndexPage from './IndexPage';
import { Noteboard } from './notes';
import { ProgressLoader } from '../common';
import { login, getUserDetail } from '../actions';
import { checkAndSetAuthorizationHeader } from '../environment';

class App extends Component {
  state = {
    hasNoToken: false
  }

  componentDidMount() {
    const hasToken = checkAndSetAuthorizationHeader();

    if (hasToken) {
      this.props.getUserDetail('app');
      return;
    }

    this.setState({ hasNoToken: true });
  }

  render() {
    const { loadingBar, authState } = this.props || {};
    return (
      <Fragment>
        <ProgressLoader/>
        <ProgressLoader scope="app" style={{ backgroundColor: 'green' }}/>
        {
          (this.state.hasNoToken || loadingBar.app === 0) && (
            <Switch>
              <Route exact path="/" render={props => (
                !authState.isAuthenticated ? <IndexPage {...props}/> : <Redirect to="/noteboard" />
              )}/>
              <Route path="/noteboard" render={props => (
                authState.isAuthenticated ? <Noteboard {...props}/> : <Redirect to="/" />
              )}
              />
            </Switch>
          )
        }
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  login,
  getUserDetail
}, dispatch));

const mapStateToProps = ({ authState, loadingBar }) => ({ authState, loadingBar });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
