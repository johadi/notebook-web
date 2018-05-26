
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, Card, CardBody, Input, FormInline } from 'mdbreact';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleNavbarClick() {
    this.setState({
      collapse: false
    });
  }
  render() {
    return (
      <div className=" landing-page-wrapper" id="classicformpage">
        <div>
          <Navbar dark expand="md" fixed="top" scrolling>
            <Container>
              <NavbarBrand>
                <strong className="white-text">Notebook</strong>
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>

        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container className="pt-5">
              <Row className="pt-4">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h5 className="h1-responsive font-weight-bold">Write down your note</h5>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">
                    Everyone likes to write down a note. Keep your note safe by writing one now
                    and access it anywhere anytime. Have your notes in your hands by downloading
                    our iOS or Android App to seamlessly manage them.
                  </h6>
                  <Button outline color="white">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mb-4">
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
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>
      </div>
    );
  }
}

export default IndexPage;
