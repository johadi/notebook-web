import React from 'react';
import PropTypes from 'prop-types';
import MaterialTitlePanel from './MaterialTitlePanel';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
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
    padding: '16px',
    position: 'absolute',
    width: 256,
    top: 0,
    bottom: 0,
    backgroundColor: '#092035',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 5; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
  }

  return (
    <MaterialTitlePanel title="lord" style={style}>
      <div style={styles.content}>
        <a href="index.html" style={styles.sidebarLink}>Home</a>
        <a href="responsive_example.html" style={styles.sidebarLink}>Responsive Example</a>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
