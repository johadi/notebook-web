import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './MaterialTitlePanel';
import SidebarContent from './SidebarContent';
import { logout } from '../actions';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
  logout: {
    cursor: 'pointer'
  }
};

const mql = window.matchMedia(`(min-width: 800px)`);

class PageWrapperContainer extends Component {

  state = {
    mql: mql,
    docked: false,
    open: false,
  };

  componentDidMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  }

  componentDidUpdate() {
    const { authState, history } = this.props || {};
    if (!authState.isAuthenticated) {
      history.push('/');
    }
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen = (open) => {
    this.setState({open: open});
  }

  mediaQueryChanged = () => {
    this.setState({
      mql: mql,
      docked: this.state.mql.matches,
    });
  }

  toggleOpen = (ev) => {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const contentHeader = (
      <span>
        {!this.state.docked &&
          <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>
            <i className="fa fa-bars"/>
          </a>
        }
        <span onClick={this.props.logout} style={styles.logout}><i className="fa fa-sign-out"/> Logout</span>
      </span>);

    const sidebarProps = {
      sidebar: <SidebarContent/>,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            {this.props.children}
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ logout }, dispatch));

const mapStateToProps = ({ authState }) => ({ authState });

export const PageWrapper = connect(mapStateToProps, mapDispatchToProps)(PageWrapperContainer);
