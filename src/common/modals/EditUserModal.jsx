import React from 'react';
import { Input } from 'mdbreact';
import ModalWrapper from './ModalWrapper';
import avatar from '../../../public/assets/images/jimoh.jpg';
import editIcon from '../../../public/assets/images/imageediticon.png';

export const EditUserModal = (props) => (
  <ModalWrapper title="Edit User" modalId="editUserModal">
    <div className="edit-user-modal modal-body">
      <div className="row img-wrapper">
        <div className="col-4 offset-4 bg-success text-center img-inner-wrapper">
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
  </ModalWrapper>
);
