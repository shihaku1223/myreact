import React from 'react';
import PropTypes from 'prop-types';

class TabSheet extends React.Component {

  static propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { isActive: this.props.isActive };
  }

  static defaultProps = {
    text: 'Tab',
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ isActive: nextProps.isActive});
  }

  onClick = () => {
    const { onTabSheetClick, index, text } = this.props;
    onTabSheetClick(index, text);
  }

  render() {
    const { text } = this.props;
    let className = this.state.isActive ? 'is-active' : '';

    return (
      <li className={className}
          onClick={this.onClick}>
        <a>{text}</a>
      </li>
    );
  }
}

export default TabSheet;
