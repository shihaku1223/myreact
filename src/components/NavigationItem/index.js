import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

class NavigationItem extends React.Component {

  static defaultProps = {
    text: 'Item',
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { text, path, onClick } = this.props;
    return(
      <Link to={path} replace >
        <ListItem button onClick={onClick}>
        <ListItemText primary={text} />
        </ListItem>
      </Link>
    );
  }
}

export default NavigationItem;
