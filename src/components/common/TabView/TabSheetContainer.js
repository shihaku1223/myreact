import React from 'react';
import PropTypes from 'prop-types';

class TabSheetContainer extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { activedTabIndex: 0 };
  }

  handleTabClick = (idx, text) => {
    console.log('Tab: ', idx, ' ', text, ' click');
    this.setState({ activedTabIndex: idx });
  }

  render() {
    const { children } = this.props;
    //console.log(React.Children.count(children));
    return (
      <div className="tabs is-centered">
        <ul>
          {React.Children.map(children, (child, idx) => {
            return React.cloneElement(child, {
              index: idx,
              onTabSheetClick: this.handleTabClick,
              isActive: idx == this.state.activedTabIndex
            })
          })}
        </ul>
      </div>
    );
  }
}

export default TabSheetContainer;
