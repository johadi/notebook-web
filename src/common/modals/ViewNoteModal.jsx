import React from 'react';
import { Input } from 'mdbreact';
import ModalWrapper from './ModalWrapper';

export const ViewNoteModal = (props) => (
  <ModalWrapper title="Reading Note" modalId="viewNoteModal">
    <div className="view-note-modal modal-body">
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
      <button data-toggle="modal" data-target="#editNoteModal" type="button"
              className="btn btn-primary bg-note">Edit Note
      </button>
    </div>
  </ModalWrapper>
);
