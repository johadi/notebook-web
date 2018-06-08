import React, { Component } from 'react';
import { Input, Button, Fa } from 'mdbreact';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import classnames from 'classnames';
import actionTypes from '../../actionTypes';
import { register, clearAuthError } from '../../actions';
import { withAuthContextConsumer } from '../../contexts';

export class SignupTabContentContainer extends Component {
  state = {
    userDetails: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
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
    const { userDetails } = this.state;
    userDetails[name] = value;
    this.setState({ userDetails });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state.userDetails);
  };

  showLoginValidationError(error, fieldName) {
    const { data = {} } = error || {};

    if (this.checkFieldHasError(error, fieldName)) {
      return <p className="text-center text-danger bg-error">
        <small>{data[fieldName].toString()} <i className="fa fa-hand-o-up"/></small>
      </p>;
    }

    return null;
  }

  checkFieldHasError(error, fieldName) {
    const { data = {}, status, action } = error || {};

    return (data[fieldName] && status === 400 && action === actionTypes.REGISTER);
  }

  showToast({ data, action }) {
    if (!toast.isActive(this.toastId) && action === actionTypes.REGISTER) {
      this.toastId = toast.error(data, {
        onClose: this.props.clearAuthError
      });
    }
  }

  render() {
    const { authError } = this.props.authState;
    return (
      <div className="tab-pane fade"
           id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <hr className="hr-light"/>
        <form onSubmit={this.handleSubmit}>
          { authError && typeof authError.data === 'string' ? this.showToast(authError) : null }
          <Input
            className={classnames({ 'register-input': this.checkFieldHasError(authError, 'username') })}
            name="username"
            onChange={this.handleChange}
            size="sm"
            label="Your username"
            icon="user"/>
          {this.showLoginValidationError(authError, 'username')}
          <Input
            className={classnames({ 'register-input': this.checkFieldHasError(authError, 'email') })}
            name="email"
            onChange={this.handleChange}
            type="email"
            size="sm"
            label="Your email"
            icon="envelope"/>
          {this.showLoginValidationError(authError, 'email')}
          <Input
            className={classnames({ 'register-input': this.checkFieldHasError(authError, 'password') })}
            name="password"
            onChange={this.handleChange}
            autoComplete="off"
            size="sm"
            label="Your password"
            icon="lock" type="password"/>
          {this.showLoginValidationError(authError, 'password')}
          <Input
            className={classnames({ 'register-input': this.checkFieldHasError(authError, 'password_confirmation') })}
            name="password_confirmation"
            onChange={this.handleChange}
            autoComplete="off"
            size="sm"
            label="Confirm your password"
            icon="lock"
            type="password"/>
          {this.showLoginValidationError(authError, 'password_confirmation')}
          <div className="text-center mt-4 black-text">
            <Button type="submit" className="btn-auth" color="indigo">Sign Up</Button>
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

const SignupTabWithContext = withAuthContextConsumer(SignupTabContentContainer);

const mapDispatchToProps = dispatch => (bindActionCreators({ register, clearAuthError }, dispatch));

const mapStateToProps = ({ authState }) => ({ authState });

export const SignupTabContent = connect(mapStateToProps, mapDispatchToProps)(SignupTabWithContext);

