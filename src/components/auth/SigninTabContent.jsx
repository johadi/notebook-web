import React, { Component } from 'react';
import { Input, Button, Fa } from 'mdbreact';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { toast } from 'react-toastify';
import actionTypes from '../../actionTypes';
import { login, clearAuthError } from '../../actions';
import { withAuthContextConsumer } from '../../contexts';

export class SigninTabContentContainer extends Component {
  state = {
    userCredentials: {
      email: '',
      password: ''
    }
  };

  toastId = null;

  componentDidUpdate() {
    const { isAuthenticated, userDetail } = this.props.authState || {};
    if (isAuthenticated && userDetail) {
      this.props.history.push('/noteboard');
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

  showLoginValidationError(error, fieldName) {
    const { data = {} } = error || {};

    if (this.checkFieldHasError(error, fieldName)) {
      return <p className="text-center text-danger bg-error">
        <span>{data[fieldName].toString()} <i className="fa fa-hand-o-up"/></span>
      </p>;
    }

    return null;
  }

  checkFieldHasError(error, fieldName) {
    const { data = {}, status, action } = error || {};

    return (data[fieldName] && status === 400 && action === actionTypes.LOGIN);
  }

  showToast({ data, action }) {
    if (!toast.isActive(this.toastId) && action === actionTypes.LOGIN) {
      this.toastId = toast.error(data, {
        onClose: this.props.clearAuthError
      });
    }
  }

  render() {
    const { authError } = this.props.authState;

    return (
      <div className="tab-pane fade show active"
           id="nav-home" role="tabpanel"
           aria-labelledby="nav-home-tab">
        <hr className="hr-light"/>
        <form onSubmit={this.handleSubmit}>
          { authError && typeof authError.data === 'string' ? this.showToast(authError) : null }
          <Input
            className={classnames({ 'login-input': this.checkFieldHasError(authError, 'email') })}
            onChange={this.handleChange}
            name="email"
            label="Your email"
            icon="envelope"
            type="email"/>
          {this.showLoginValidationError(authError, 'email')}
          <Input
            className={classnames({ 'login-input': this.checkFieldHasError(authError, 'password') })}
            autoComplete="off"
            onChange={this.handleChange}
            name="password"
            label= "Your password"
            icon="lock"
            type="password"/>
          {this.showLoginValidationError(authError, 'password')}
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
  clearAuthError
}, dispatch));

const mapStateToProps = ({ authState }) => ({ authState });

export const SigninTabContent = connect(mapStateToProps, mapDispatchToProps)(SigninTabWithContext);
