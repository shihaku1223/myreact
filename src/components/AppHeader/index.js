import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import MenuIcon from 'material-ui-icons/Menu';

//import logo from '../images/logo.jpg';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    outline: '0px',
    marginLeft: '-12px',
    marginRight: '50px',
  },
};

class AppHeader extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    onMenuClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { title, onMenuClick } = this.props;
    return (
      <AppBar position='static' >
        <Toolbar>
          <IconButton style={styles.menuButton}
            onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={styles.flex}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppHeader;
