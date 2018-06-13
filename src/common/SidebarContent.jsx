import React from 'react';
import PropTypes from 'prop-types';
import MaterialTitlePanel from './MaterialTitlePanel';
import avatar from '../../public/assets/images/placeholder.png';

const styles = {
  sidebar: {
    width: 300,
    height: '100%',
  },
  sidebarItem: {
    display: 'block',
    paddingBottom: '5px',
    color: '#ffffff',
    textDecoration: 'none',
  },
  sidebarButton: {
    marginTop: '10px',
    color: '#092035',
    fontWeight: 'bold',
    padding: '0.6rem 2.14rem'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    // padding: '16px',
    // height: '100%',
    // backgroundColor: '#092035',
    position: 'absolute',
    width: 300,
    top: 0,
    bottom: 0,
    backgroundColor: '#092035',
  },
  image: {
    width: '130px',
    height: '130px',
  },
  userSection: {
    marginTop: '100px'
  },
  sidebarHeaderText: {
    fontFamily: 'ComicSansMS-Bold',
    fontSize: '18px',
    marginTop: '20px',
    marginLeft: '50px',
    letterSpacing: '-0.1px',
    color: '#fff',
    textDecoration: 'none',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
  const { username, email, avatar_path } = props.userDetail;

  return (
    <MaterialTitlePanel style={style}>
      <div style={styles.content}>
        <p style={styles.sidebarHeaderText}>Notebook</p>
        <div style={styles.userSection} className="d-flex w-100 flex-column align-items-center">
          <img style={styles.image} className="rounded-circle text-center" src={ avatar_path ? avatar_path : avatar } alt="User avatar"/><br/>
          <strong style={styles.sidebarItem}>{username}</strong>
          <strong style={styles.sidebarItem}>{email}</strong>
          <button className="btn" style={styles.sidebarButton} data-toggle="modal" data-target="#editUserModal">Edit Profile</button>
        </div>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;

/* Notebook: */
// font-family: ComicSansMS-Bold;
// font-size: 30px;
// color: #FFFFFF;
// letter-spacing: -0.1px;
