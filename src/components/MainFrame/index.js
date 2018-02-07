import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import AppHeader from 'components/AppHeader';
import SideNavigationBar from '../SideNavigationBar';

import MainContentView from 'components/MainContentView';

const getElementHeight = el => el.clientHeight;

const styles = {
  root: {
    height: '100%',
  },
  header: {
    position: 'relative',
    width: '100%',
  },
}

class MainFrame extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    getElementHeight
  }

  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
  }

  componentDidMount() {
    const headerHeight = this.props.getElementHeight(this._header);
    console.log('AppHeader height ' +  headerHeight);
  }

  handleMenuClick = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render(){
    return (
      <div style={styles.root}>
        <div style={styles.header} ref={(c) => this._header = c}>
          <AppHeader title='Title' onMenuClick={this.handleMenuClick} />
        </div>
        <SideNavigationBar
          drawerOpen={this.state.drawerOpen}
          onClose={this.handleMenuClick}/>
        <MainContentView>
          {this.props.children}
        </MainContentView>
      </div>
    );
  }
}

export default MainFrame;
