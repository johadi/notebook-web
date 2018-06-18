import React, { Component, createRef } from 'react';
import { Input } from 'mdbreact';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModalWrapper from './ModalWrapper';
import avatar from '../../../public/assets/images/placeholder.png';
import editIcon from '../../../public/assets/images/imageediticon.png';
import { updateUser, clearUserError } from '../../actions';
import actionTypes from '../../actionTypes';

class EditUserModalContainer extends Component {
  state = {
    userDetails: {
      avatar: '',
      username: ''
    }
  };

  toastId = null;

  componentDidMount() {
    const { userDetails } = this.state;
    userDetails.username = this.props.authState.userDetail.username;
    this.setState({ userDetails });
  }

  componentDidUpdate() {
    const { userState, clearUserError, authState } = this.props;

    if (userState.userIsUpdated && !toast.isActive(this.toastId)) {
      this.toastId = toast.success('Your details has been updated!', {
        onOpen: () => {
          const { userDetails } = this.state;
          userDetails.username = authState.userDetail.username;
          userDetails.avatar = '';
          this.setState({ userDetails });
          clearUserError();
        }
      });
    }
  }

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
    const { userDetail } = this.props.authState;
    event.preventDefault();
    const { username, avatar: stateAvatar } = this.state.userDetails;

    if (stateAvatar) {
      const size = stateAvatar.size / 1000;
      if (size > 2000) {
        this.toastId = toast.error('File size must not be larger than 2MB.');
        return;
      }
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('avatar', stateAvatar);

    if (username.toLowerCase() !== userDetail.username.toLowerCase() || stateAvatar) {
      this.props.updateUser(formData);
    }
  };

  showToast({ data, status, action }) {
    if (!toast.isActive(this.toastId) && action === actionTypes.UPDATE_USER) {
      let message = (typeof data === 'object' && status === 500) ? 'Server error! Try again' : data;

      if (typeof data === 'object' && status === 400) {
        message = 'Invalid image! Ensure image size is not more than 2MB and the format is in png/jpg/jpeg.';
      }

      this.toastId = toast.error(message, {
        onClose: this.props.clearUserError
      });
    }
  }

  render() {
    const { authState, userState } = this.props;
    const { userError } = userState;
    const { avatar_path } = authState.userDetail;
    return (
      <ModalWrapper title="Edit User" modalId="editUserModal">
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          { userError ? this.showToast(userError) : null }
          <div className="edit-user-modal modal-body">
            <div className="row img-wrapper">
              <div onClick={() => this.avatarInput.current.click()} className="col-4 offset-4 text-center img-inner-wrapper">
                <img ref={this.avatarImage} className="user-avatar rounded" src={ avatar_path ? avatar_path : avatar }
                     alt="User profile"/>
                <img className="edit-icon"
                     src={editIcon} alt="Edit image icon"/>
              </div>
            </div>
            <input style={{ display: 'none' }} ref={this.avatarInput} onChange={this.handleChange}
                   type="file" id="avatar" name="avatar" accept=".jpg, .jpeg, .png"/>
            <Input
              onChange={this.handleChange}
              name="username"
              className="username-field"
              value={this.state.userDetails.username}
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

const mapDispatchToProps = dispatch => (bindActionCreators({ updateUser, clearUserError }, dispatch));

const mapStateToProps = ({ authState, loadingBar, userState }) => ({
  authState, loadingBar, userState
});

export const EditUserModal = connect(mapStateToProps, mapDispatchToProps)(EditUserModalContainer);
