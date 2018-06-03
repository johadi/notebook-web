import React from 'react';
import {Input} from 'mdbreact';

const ModalWrapper = ({modalId, title, children}) => (
  <div className="new-note-modal modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby={`${modalId}Label`} aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header modal-head">
          <h5 className="modal-title" id={`${modalId}Label`}>
            <small className="title-text">{title}</small>
          </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default ModalWrapper;
