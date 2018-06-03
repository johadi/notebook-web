import React, { Component } from 'react';
import { Input, Button, Fa } from 'mdbreact';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';

export class SigninTabContentContainer extends Component {
  render() {
    return (
      <div className="tab-pane fade show active"
           id="nav-home" role="tabpanel"
           aria-labelledby="nav-home-tab">
        <hr className="hr-light"/>
        <Input label="Your email" icon="envelope"/>
        <Input label="Your password" icon="lock" type="password"/>
        <div className="text-center mt-4 black-text">
          <Button className="btn-auth" color="indigo">Sign In</Button>
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

export const SigninTabContent = connect(mapStateToProps, mapDispatchToProps)(SigninTabContentContainer);
