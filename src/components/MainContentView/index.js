import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    body: {
        display: 'block',
        height: '100%',
        //position: 'relative',
        //left: 0,
        //right: 0,
        //top: 0,
        //bottom: 0,
        background: '#f3f4f8',
        //overflow: 'auto'
    },
}

class MainContentView extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount() {
    console.log(this._c.clientHeight);
  }

  render(){
    return (
      <div style={styles.body} ref={(c) => this._c = c} >
        {this.props.children}
      </div>
    );
  }
}

export default MainContentView;
