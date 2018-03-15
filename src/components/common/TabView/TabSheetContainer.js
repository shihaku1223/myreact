import React from 'react';
import PropTypes from 'prop-types';

class TabSheetContainer extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  static style = {
    marginBottom: '3px'
  }

  constructor(props) {
    super(props);
    this.state = { activedTabIndex: 0 };
  }

  handleTabClick = (idx, text) => {
    console.log('Tab: ', idx, ' ', text, ' click');
    this.setState({ activedTabIndex: idx });
  }

  getSelectedContent = () => {
    const { children } = this.props;
    const content = children[this.state.activedTabIndex].props.content;

    return React.createElement(content);
  }

  render() {
    const { children } = this.props;
    //console.log(React.Children.count(children));
    return (
      <div style={TabSheetContainer.style}>
        <div style={TabSheetContainer.style} className="tabs is-centered">
          <ul style={TabSheetContainer.style}>
            {React.Children.map(children, (child, idx) => {
              return React.cloneElement(child, {
                index: idx,
                onTabSheetClick: this.handleTabClick,
                isActive: idx == this.state.activedTabIndex
              })
            })}
          </ul>
        </div>
        {this.getSelectedContent()}
      </div>
    );
  }
}

export default TabSheetContainer;
