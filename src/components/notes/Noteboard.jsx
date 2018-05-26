import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Input, Fa } from 'mdbreact';
import { PageWrapper } from '../../common';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

class Noteboard extends React.Component {

  state = { modal: false};

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <PageWrapper>
        <div className="container noteboard-wrapper">
          <div className="list-group">
            <h5 className="ml-4 text-bold">Noteboard</h5>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">Traveling soon</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius.
                Maecenas sed diam blandit...</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">List group item heading</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">List group item heading</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">List group item heading</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">List group item heading</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">List group item heading</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">List group item heading</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">List group item heading</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">List group item heading</h5>
              <p className="mb-1 note-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                blandit.</p>
              <div className="d-flex w-100 justify-content-between">
                <small className="text-muted">personal</small>
                <small className="text-muted">3:45 PM</small>
              </div>
            </a>
          </div>
        </div>
        <div onClick={this.toggle} className="new-note-icon">+</div>
        <Modal className="new-note-modal" size="md" centered isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="modal-head" toggle={this.toggle}>
            <small className="title-text">New Note</small>
          </ModalHeader>
          <ModalBody>
            <form>
              <Input label="Type Note title" icon="tag" group type="text" validate error="wrong" success="right"/>
              <Input className="text-area" type="textarea" label="Type Note body" icon="pencil"/>
              <div className="form-group select-wrapper">
                <div className="mdl-selectfield">
                  <i className="fa fa-lg fa-filter" />
                  <select className="browser-default">
                    <option value="" selected>Uncategorized</option>
                    <option value="1">Travel</option>
                    <option value="2">Sport</option>
                    <option value="3">Movie</option>
                  </select>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Close</Button>{' '}
            <Button className="bg-note">Add Note</Button>
          </ModalFooter>
        </Modal>
      </PageWrapper>
    );
  }
}

export {Noteboard}
