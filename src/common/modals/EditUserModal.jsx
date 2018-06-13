import React, { Component, createRef } from 'react';
import { Input } from 'mdbreact';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModalWrapper from './ModalWrapper';
import avatar from '../../../public/assets/images/placeholder.png';
import editIcon from '../../../public/assets/images/imageediticon.png';
import { updateUser, clearNoteError } from '../../actions';

class EditUserModalContainer extends Component {
  state = {
    userDetails: {
      avatar: '',
      username: ''
    }
  };

  avatarInput = createRef();
  avatarImage = createRef();

  handleChange = (event) => {
    const { userDetails } = this.state;
    const {
      name, type, value, files
    } = event.target || {};

    if (type === 'file' && files.length > 0) {
      window.URL = window.URL || window.webkitURL;
      this.avatarImage.current.src = window.URL.createObjectURL(files[0]);
      userDetails[name] = files[0];
    } else {
      userDetails[name] = value;
    }
    this.setState({ userDetails });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, avatar } = this.state.userDetails;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('avatar', avatar);
    this.props.updateUser(formData);
  };

  render() {
    const { username, avatar_path } = this.props.authState.userDetail;
    return (
      <ModalWrapper title="Edit User" modalId="editUserModal">
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div className="edit-user-modal modal-body">
            <div className="row img-wrapper">
              <div className="col-4 offset-4 text-center img-inner-wrapper">
                <img ref={this.avatarImage} className="user-avatar rounded" src={ avatar_path ? avatar_path : avatar }
                     alt="User profile"/>
                <img onClick={() => this.avatarInput.current.click()} className="edit-icon"
                     src={editIcon} alt="Edit image icon"/>
              </div>
            </div>
            <input style={{ display: 'none' }} ref={this.avatarInput} onChange={this.handleChange}
                   type="file" id="avatar" name="avatar" accept=".jpg, .jpeg, .png"/>
            <Input
              onChange={this.handleChange}
              name="username"
              className="username-field"
              value={!this.state.userDetails.username ? username : this.state.userDetails.username}
              label="Type New Username" icon="user"
              group type="text" validate error="wrong" success="right"/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" data-dismiss="modal">Cancel</button>
            <button type="submit" className="btn btn-primary bg-note">Update Detail</button>
          </div>
        </form>
      </ModalWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ updateUser, clearNoteError }, dispatch));

const mapStateToProps = ({ authState, loadingBar, userState }) => ({
  authState, loadingBar, userState
});

export const EditUserModal = connect(mapStateToProps, mapDispatchToProps)(EditUserModalContainer);
