import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RouterLink = (Component) => {
  return class extends React.Component {

    static propTypes = {
      to: Proptypes.string.isRequired
    }

    static contextType = {
      router: Proptypes.object
    }
  }
}
