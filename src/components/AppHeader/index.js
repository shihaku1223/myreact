import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import MenuIcon from 'material-ui-icons/Menu';

import SideNavigationBar from '../SideNavigationBar';

//import logo from '../images/logo.jpg';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: '-12px',
    marginRight: '50px',
  },
};

class AppHeader extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { classes } = this.props;
    const title = this.props.title;
    return (
      <AppBar className={classes.root} position='static' >
        <Toolbar>
          <IconButton className={classes.menuButton}
            onClick={this.handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
        </Toolbar>
        <SideNavigationBar
          drawerOpen={this.state.open}
          onClose={this.handleDrawerToggle}/>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppHeader);
