
import React from 'react';
import { Navbar, NavbarBrand, Mask, Row, Col, Button, View, Container } from 'mdbreact';
import { AuthTab } from './auth';

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
                  <AuthTab/>
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
