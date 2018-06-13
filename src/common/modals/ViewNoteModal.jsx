import React, { Component, createRef } from 'react';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteNote, clearNoteError } from '../../actions';
import ModalWrapper from './ModalWrapper';
import actionTypes from '../../actionTypes';

class ViewNoteModalContainer extends Component {
  toastId = null;
  cancelButton = createRef();

  componentDidUpdate() {
    const { noteState, clearNoteError } = this.props;

    if (noteState.noteDeleted && !toast.isActive(this.toastId)) {
      this.toastId = toast.success('Your note has been deleted!', {
        onOpen: () => {
          clearNoteError();
          this.cancelButton.current.click();
        }
      });
    }
  }
  handleDelete = () => {
    const { note, deleteNote } = this.props;
    deleteNote(note.id);
  };

  showToast({ data, status, action }) {
    if (!toast.isActive(this.toastId) && action === actionTypes.DELETE_NOTE) {
      const message = typeof data === 'string' ? data : 'Server error! Try again';
      this.toastId = toast.error(message, {
        onClose: this.props.clearNoteError
      });
    }
  }

  render() {
    const { note, noteState } = this.props;
    const { noteError } = noteState;
    return (
      <ModalWrapper title="Reading Note" modalId="viewNoteModal">
        <div className="view-note-modal modal-body">
          <div className="d-flex w-100 justify-content-between border-bottom pb-2 mb-2 px-3">
            <small className="text-muted">{note.category}</small>
            <small className="text-muted">{note.updated_at}</small>
          </div>
          <p className="text-center text-note text-bold">{note.title}</p>
          { noteError ? this.showToast(noteError) : null }
          <p className="">{note.body}</p>
        </div>
        <div className="modal-footer">
          <button ref={this.cancelButton} style={{ display: 'none' }} data-dismiss="modal"/>
          <button type="button" onClick={this.handleDelete} className="btn btn-danger">Delete Note</button>
          <button data-toggle="modal" data-target="#editNoteModal" type="button"
                  className="btn btn-primary bg-note">Edit Note
          </button>
        </div>
      </ModalWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ deleteNote, clearNoteError }, dispatch));

const mapStateToProps = ({ noteState, loadingBar }) => ({
  noteState, loadingBar
});

export const ViewNoteModal = connect(mapStateToProps, mapDispatchToProps)(ViewNoteModalContainer);

