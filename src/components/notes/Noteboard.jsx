import React, { createRef, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { PageWrapper } from '../../common';
import {AddNoteModal, EditUserModal, ViewNoteModal } from '../../common/modals';
import { getNotes } from '../../actions';

class NoteboardContainer extends Component {

  state = {
    newNoteModal: false,
    viewNoteModal: false,
  };

  componentDidMount() {
    console.log("Note props", this.props);
    this.props.getNotes();
  }
  modalElement = createRef();
  modalCancelButton = createRef();

  onOpen = (e) => {
    // this.modalElement.current.setAttribute('aria-hidden', 'true');
    // this.modalElement.current.classList.remove('show');
    // this.modalElement.current.style.display = 'none';
    // this.modalCancelButton.current.click();
  };

  toggle = (modalType) => {
    this.setState({
      [modalType]: !this.state[modalType],
    });
  }

  render() {
    const { location, history, match } = this.props || {};
    const routeProps = { location, history, match };

    return (
      <div>
        <PageWrapper {...routeProps} >
          <LoadingBar scope="board"/>
          <div className="container noteboard-wrapper">
            <div className="list-group">
              <h5 className="ml-4 text-bold">Noteboard {this.props.noteState.sum}</h5>
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
          <ViewNoteModal/>
          <AddNoteModal modalId="newNoteModal" title="New Note" />
          <AddNoteModal modalId="editNoteModal" title="Editing Note" note={{ title: 'Hey', body: 'I am note', category: 'sport' }}/>
          <EditUserModal/>
        </PageWrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ getNotes }, dispatch));

const mapStateToProps = ({ noteState }) => ({ noteState });

export const Noteboard = connect(mapStateToProps, mapDispatchToProps)(NoteboardContainer);
