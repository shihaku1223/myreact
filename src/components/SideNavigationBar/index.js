import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import NavigationItem from 'components/NavigationItem';

const mapStateToProps = (state, ownProps) => {
  const { routing } = state;
  return { pathname: routing.location.pathname }
}
/*
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, counterActions), dispatch)
  }
}
*/

class SideNavigationBar extends Component {

  static style = {
    paper: {
      width: '200px',
    }
  }

  static propTypes = {
    // from redux store
    pathname: PropTypes.string.isRequired,
    onClose: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, drawerOpen, onClose } = this.props;

    const list = (
      <div>
        <List>
          <NavigationItem path='/counter/inc' text='INC'/>
          <NavigationItem path='/counter/dec' text='DEC'/>
          <NavigationItem path='/contact' text='Contact'/>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer classes={{
            paper: classes.paper
          }}
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

export default
  connect(mapStateToProps)
    (withStyles(SideNavigationBar.style)(SideNavigationBar));
