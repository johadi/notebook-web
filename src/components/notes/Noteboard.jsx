import React, { createRef } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Input, Fa } from 'mdbreact';
import { PageWrapper } from '../../common';
import avatar from '../../../public/assets/images/jimoh.jpg';
import editIcon from '../../../public/assets/images/imageediticon.png';

class Noteboard extends React.Component {

  state = {
    newNoteModal: false,
    viewNoteModal: false
  };

  modalElement = createRef();
  modalCancelButton = createRef();

  onOpen = () => {
    // this.modalElement.current.setAttribute('aria-hidden', 'true');
    // this.modalElement.current.classList.remove('show');
    // this.modalElement.current.style.display = 'none';
    this.modalCancelButton.current.click();
  };

  toggle = (modalType) => {
    this.setState({
      [modalType]: !this.state[modalType],
    });
  }

  render() {
    return (
      <PageWrapper>
        <div className="container noteboard-wrapper">
          <div className="list-group">
            <h5 className="ml-4 text-bold">Noteboard</h5>
            <a data-toggle="modal" href="#viewNoteModal" className="list-group-item list-group-item-action flex-column align-items-start">
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
        <div data-toggle="modal" data-target="#newNoteModal" className="new-note-icon">+</div>
        <div className="modal fade" id="viewNoteModal" tabIndex="-1" role="dialog"
             aria-labelledby="viewNoteModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-head">
                <h5 className="modal-title" id="viewNoteModalLabel">
                  <small className="title-text">Reading Note</small>
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="d-flex w-100 justify-content-between border-bottom pb-2 mb-2 px-3">
                  <small className="text-muted">personal</small>
                  <small className="text-muted">3:45 PM</small>
                </div>
                <p className="text-center text-note text-bold">I wanna Travel soon</p>
                <p className="">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
                  varius
                  blandit.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Delete Note
                </button>
                <button data-toggle="modal" data-target="#newNoteModal" type="button"
                        className="btn btn-primary bg-note">Edit Note
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="new-note-modal modal fade" id="newNoteModal" tabIndex="-1" role="dialog" aria-labelledby="newNoteModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-head">
                <h5 className="modal-title" id="newNoteModalLabel">
                  <small className="title-text">New Note</small>
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
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
              </div>
              <div className="modal-footer">
                <button ref={this.modalCancelButton} type="button" className="btn btn-warning" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary bg-note">Add Note</button>
              </div>
            </div>
          </div>
        </div>
        <div className="edit-user-modal modal fade" id="editUserModal" tabIndex="-1" role="dialog" aria-labelledby="editUserModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-head">
                <h5 className="modal-title" id="editUserModalLabel">
                  <small className="title-text">Edit User</small>
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row img-wrapper">
                  <div className="col-4 offset-4 text-center img-inner-wrapper">
                    <img className="user-avatar rounded" src={avatar} alt="User profile"/>
                    <img className="edit-icon" src={editIcon} alt="Edit image icon"/>
                  </div>
                </div>
                <form>
                  <Input className="username-field" value={'johadi'} label="Type New Username" icon="user" group type="text" validate error="wrong" success="right"/>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary bg-note">Update Detail</button>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
}

export {Noteboard}
