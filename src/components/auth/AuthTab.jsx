import React from 'react';
import { Card, CardBody } from 'mdbreact';
import { SigninTabContent } from './SigninTabContent';
import { SignupTabContent } from './SignupTabContent';

export const AuthTab = () => (
  <Card id="classic-card">
    <CardBody className="z-depth-2 white-text">
      <nav className="z-depth-1-half mb-3">
        <div className="nav nav-pills" id="nav-tab" role="tablist">
          <a className="nav-link-text nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
             role="tab" aria-controls="nav-home" aria-selected="true">Login</a>
          <a className="nav-link-text nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
             aria-controls="nav-profile" aria-selected="false">Register</a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <SigninTabContent/>
        <SignupTabContent/>
      </div>
    </CardBody>
  </Card>
);
