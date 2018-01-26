import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const style = {
};

class SideNavigationBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, drawerOpen, onClose } = this.props;

    const list = (
      <div>
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer
          open={drawerOpen}
          onClose={onClose}>
          <div
            role='button'
            onClick={onClose}
            onKeyDown={onClose}>
            {list}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(style)(SideNavigationBar);
