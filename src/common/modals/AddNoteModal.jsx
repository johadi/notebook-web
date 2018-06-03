import React from 'react';
import { Input } from 'mdbreact';
import ModalWrapper from './ModalWrapper';

export const AddNoteModal = ({ title, modalId, note }) => (
  <ModalWrapper title={title} modalId={modalId}>
    <div className="new-note-modal modal-body">
      <form>
        <Input value={note ? note.title : '' } label="Type Note title" icon="tag" group type="text" validate error="wrong" success="right"/>
        <Input value={note ? note.body : '' } className="text-area" type="textarea" label="Type Note body" icon="pencil"/>
        <div className="form-group select-wrapper">
          <div className="mdl-selectfield">
            <i style={{ color: '#4285f4' }} className="fa fa-lg fa-filter" />
            <select className="browser-default" defaultValue={note ? note.category : 'uncategorised'}>
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
      </form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-warning" data-dismiss="modal">Cancel</button>
      <button type="button" className="btn btn-primary bg-note">{note ? 'Update Note' : 'Add Note'}</button>
    </div>
  </ModalWrapper>
);
