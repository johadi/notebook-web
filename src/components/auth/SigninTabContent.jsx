import React, { Component } from 'react';
import { Input, Button, Fa } from 'mdbreact';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, getUserDetail } from '../../actions';
import { withAuthContextConsumer } from '../../contexts';

export class SigninTabContentContainer extends Component {
  state = {
    userCredentials: {
      email: '',
      password: ''
    }
  };

  componentDidUpdate() {
    const { isAuthenticated, userDetail } = this.props.authState || {};
    if (isAuthenticated && userDetail) {
      this.props.history.push('/noteboard');
      return;
    }
    //
    if (isAuthenticated) {
      this.props.getUserDetail('login');
    }
  }

  /**
   * Handles change event for input fields
   * @param event
   */
  handleChange = (event) => {
    const { name, value } = event.target;
    const { userCredentials } = this.state;
    userCredentials[name] = value;
    this.setState({ userCredentials });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.login(this.state.userCredentials);
  };

  render() {
    return (
      <div className="tab-pane fade show active"
           id="nav-home" role="tabpanel"
           aria-labelledby="nav-home-tab">
        <hr className="hr-light"/>
        <form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} name="email" label="Your email" icon="envelope"
                 type="email"/>
          <Input autoComplete="off" onChange={this.handleChange} name="password"
                 label="Your password" icon="lock" type="password"/>
          <div className="text-center mt-4 black-text">
            <Button type="submit" className="btn-auth" color="indigo">Sign In</Button>
            <hr className="hr-light"/>
            <div className="text-center d-flex justify-content-center white-label">
              <a className="p-2 m-2">
                <Fa icon="facebook" className="white-text"/>
              </a>
              <a className="p-2 m-2">
                <Fa icon="twitter" className="white-text"/>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const SigninTabWithContext = withAuthContextConsumer(SigninTabContentContainer);

const mapDispatchToProps = dispatch => (bindActionCreators({
  login,
  getUserDetail
}, dispatch));

const mapStateToProps = ({ authState }) => ({ authState });

export const SigninTabContent = connect(mapStateToProps, mapDispatchToProps)(SigninTabWithContext);
