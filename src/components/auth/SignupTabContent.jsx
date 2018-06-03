import React, { Component } from 'react';
import { Input, Button, Fa } from 'mdbreact';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';

export class SignupTabContentContainer extends Component {
  render() {
    return (
      <div className="tab-pane fade"
           id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <hr className="hr-light"/>
        <Input size="sm" label="Your full name" icon="user"/>
        <Input size="sm" label="Your email" icon="envelope"/>
        <Input size="sm" label="Your password" icon="lock" type="password"/>
        <Input size="sm" label="Confirm your password" icon="lock" type="password"/>
        <div className="text-center mt-4 black-text">
          <Button className="btn-auth" color="indigo">Sign Up</Button>
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ getNotes }, dispatch));

const mapStateToProps = ({ noteState }) => ({ noteState });

export const SignupTabContent = connect(mapStateToProps, mapDispatchToProps)(SignupTabContentContainer);

