import React, { createRef, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import InfiniteScroll from 'react-infinite-scroller';
import { PageWrapper } from '../../common';
import { AddNoteModal, EditUserModal, ViewNoteModal } from '../../common/modals';
import { getNotes } from '../../actions';

class NoteboardContainer extends Component {

  state = {
    currentNote: {}
  };

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
  };

  loadMore = () => {
    const { currentPageAndMetaData } = this.props.noteState;
    const { next_page_url, current_page } = currentPageAndMetaData || {};
    //
    const page = next_page_url ? (current_page + 1) : 1;
    this.props.getNotes(page);
  };

  renderEmptyState = () => {
    const { isFetchingNotes } = this.props.noteState;

    return (isFetchingNotes === null || isFetchingNotes) ?
      <div className="text-center"><i className="fa fa-2x fa-spinner fa-spin"/></div> :
      <div className="text-center pt-5">
        <p> We are sad! You currently have no note...</p>
        <i className="fa fa-frown-o fa-5x"/>
        <p>Click the plus icon by the bottom right to start writing your note</p>
      </div>;
  }

  showNote = (note) => {
    this.setState({ currentNote: note })
  }

  updateCurrentNote = (updatedNote) => {
    this.setState({ currentNote: updatedNote });
  }

  render() {
    const { location, history, match, noteState } = this.props || {};
    const routeProps = {
      location,
      history,
      match
    };
    const { notes, hasMoreNotes, isFetchingNotes } = noteState;
    const loader = <div className="bg-danger d-flex justify-content-center">
      <Spinner className="text-center" name="ball-spin-fade-loader" color="#092035"/>
    </div>;

    const items = notes.length > 0 ? notes.map(note => (
      <a key={note.id} data-toggle="modal" onClick={() => this.showNote(note)} href="#viewNoteModal"
         className="list-group-item list-group-item-action flex-column align-items-start">
        <h5 className="mb-1">{note.title}</h5>
        <p className="mb-1 note-text">{note.body}</p>
        <div className="d-flex w-100 justify-content-between">
          <small className="text-muted">{note.category}</small>
          <small className="text-muted">{note.updated_at}</small>
        </div>
      </a>
    )) : this.renderEmptyState();

    return (
      <div>
        <PageWrapper {...routeProps} >
          <div className="container noteboard-wrapper">
            <div className="list-group"
                 style={notes.length > 0 ?
                   { height: '700px', overflow: 'auto' } : null
                 }
            >
              <h5 className="pl-4 text-bold noteboard-head">Noteboard</h5><div className="d-none">{loader}</div>
              <InfiniteScroll
                pageStart={0}
                loadMore={this.loadMore}
                useWindow={false}
                hasMore={hasMoreNotes && !isFetchingNotes}
                loader={loader}>
                {items}
              </InfiniteScroll>
            </div>
          </div>
          <div data-toggle="modal" data-target="#newNoteModal" className="new-note-icon">+</div>
          <ViewNoteModal note={this.state.currentNote}/>
          <AddNoteModal modalId="newNoteModal" modalTitle="New Note" {...routeProps} />
          <AddNoteModal updateCurrentNote={this.updateCurrentNote} modalId="editNoteModal" modalTitle="Editing Note" note={this.state.currentNote}/>
          <EditUserModal/>
        </PageWrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ getNotes }, dispatch));

const mapStateToProps = ({ noteState, loadingBar }) => ({
  noteState,
  loadingBar
});

export const Noteboard = connect(mapStateToProps, mapDispatchToProps)(NoteboardContainer);
