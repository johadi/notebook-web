import React, { Component, createRef } from 'react';
import { Input } from 'mdbreact';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveNote, clearNoteError, updateNote } from '../../actions';
import { toast } from 'react-toastify';
import ModalWrapper from './ModalWrapper';
import actionTypes from '../../actionTypes';

class AddNoteModalContainer extends Component {
  state = {
    note: {
      category: 'uncategorised',
      title: '',
      body: ''
    }
  };

  toastId = null;
  cancelButton = createRef();

  static getDerivedStateFromProps(props, state) {
    const { note, loadingBar, noteState } = props;
    const { category, title, body } = note || {};
    const { category: stateCategory, title: stateTitle, body: stateBody } = state || {};

    if (category !== stateCategory || title !== stateTitle || body !== stateBody) {

      if (loadingBar.default === 1) return null;

      return {
        note: { category, title, body }
      };
    }

    return null;
  }

  componentDidUpdate () {
    const { noteState, modalId } = this.props;

    if (noteState.newNote && !toast.isActive(this.toastId) && modalId === 'newNoteModal') {
      this.toastId = toast.success('Your note has been saved!', {
        onOpen: () => {
          this.setState({
            note: {
              category: 'uncategorised',
              title: '',
              body: ''
            }
          });
          this.props.clearNoteError();
          this.cancelButton.current.click();
        }
      });
    }

    if (noteState.editedNote && !toast.isActive(this.toastId) && modalId === 'editNoteModal') {
      this.toastId = toast.success('Your note has been updated!', {
        onOpen: () => {
          this.props.updateCurrentNote(noteState.editedNote);
          this.props.clearNoteError();
          this.cancelButton.current.click();
        },
      });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { note } = this.state;
    if (this.props.note) {
      this.props.updateNote(this.props.note.id, note);
      return;
    }

    this.props.saveNote(note);
  }

  handleChange= (event) => {
    const { note } = this.state;
    note[event.target.name] = event.target.value;

    this.setState({ note });
  }

  showToast({ data, status, action }, noteType) {
    if (!toast.isActive(this.toastId) && action === actionTypes.SAVE_NOTE && noteType === 'new') {
      if (typeof data === 'string') {
        this.toastId = toast.error(data, {
          onClose: this.props.clearNoteError
        });
        return;
      }

      if (typeof data === 'object') {
        const message = status === 400 ?
          'Your Note must have a title and a body' :
          'Internal Server Error';
        this.toastId = toast.error(message, {
          onClose: this.props.clearNoteError
        });
      }
    }

    if (!toast.isActive(this.toastId) && action === actionTypes.UPDATE_NOTE && noteType === 'edit') {
      if (typeof data === 'string') {
        this.toastId = toast.error(data, {
          onClose: this.props.clearNoteError
        });
        return;
      }

      if (typeof data === 'object') {
        const message = status === 400 ?
          'Your Note must have a title and a body' :
          'Internal Server Error';
        this.toastId = toast.error(message, {
          onClose: this.props.clearNoteError
        });
      }
    }
  }

  render() {
    const { modalTitle, modalId, note, noteState, loadingBar } = this.props;
    const { noteError } = noteState;
    const { title, category, body } = this.state.note;

    return (
      <ModalWrapper title={modalTitle} modalId={modalId}>
        <form onSubmit={this.handleSubmit}>
          { noteError && modalId === 'newNoteModal' ? this.showToast(noteError, 'new') : null }
          { noteError && modalId === 'editNoteModal' ? this.showToast(noteError, 'edit') : null }
          <div className="new-note-modal modal-body">
              <Input
                name="title"
                value={title}
                label="Type Note title"
                onChange={this.handleChange}
                icon="tag" group
                type="text"
                validate
                error="wrong"
                success="right"/>
              <Input
                name="body"
                value={body}
                className="text-area"
                type="textarea"
                label="Type Note body"
                onChange={this.handleChange}
                icon="pencil"/>
              <div className="form-group select-wrapper">
                <div className="mdl-selectfield">
                  <i style={{ color: '#4285f4' }} className="fa fa-lg fa-filter" />
                  <select name="category" onChange={this.handleChange} className="browser-default" value = {category}>
                    <option value="uncategorised">Uncategorised</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="family affair">Family affair</option>
                    <option value="study">Study</option>
                    <option value="sport">Sport</option>
                    <option value="travel">Travel</option>
                  </select>
                </div>
              </div>
          </div>
          <div className="modal-footer">
            <button ref={this.cancelButton} type="button" className="btn btn-warning" data-dismiss="modal">Cancel</button>
            <button disabled={ toast.isActive(this.toastId) || loadingBar.default === 1 } type="submit" className="btn btn-primary bg-note">{note ? 'Update Note' : 'Add Note'}</button>
          </div>
        </form>
      </ModalWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ saveNote, clearNoteError, updateNote }, dispatch));

const mapStateToProps = ({ noteState, loadingBar }) => ({
  noteState, loadingBar
});

export const AddNoteModal = connect(mapStateToProps, mapDispatchToProps)(AddNoteModalContainer);

