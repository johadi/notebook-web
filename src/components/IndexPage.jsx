import React, {Component } from 'react';
import { Navbar, NavbarBrand, Mask, Row, Col, Button, View, Container } from 'mdbreact';
import { AuthTab } from './auth';
import { AuthContextProvider } from '../contexts';

class IndexPage extends Component {
  render() {
    const { location, history, match } = this.props;
    const routeProps = { location, history, match };

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
                  <h5 className="h5-responsive font-weight-bold">Do not procrastinate in writing down notes </h5>
                  <hr className="hr-light"/>
                  <h6 className="mb-4">
                    Ideas can come up anytime, anywhere. Do not hesitate to write it down. with
                    <strong> Notebook,</strong> you can write down your notes and access
                    them anywhere, anytime.
                  </h6>
                </div>
                <Col md="6" xl="5" className="mb-4">
                  <AuthContextProvider value={routeProps} component={AuthTab}/>
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
