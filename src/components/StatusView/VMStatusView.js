import React from 'react';
import PropTypes from 'prop-types';

import TabViewContent from 'components/common/TabView/TabViewContent';
import BootstrapButton from 'components/Button/BootstrapButton';

class VMStatusView extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
      statusText: 'Loading...'
  }

  constructor(props, context) {
    super(props, context);
  }

  handleRefresh = () => {
    console.log('refresh');
  }

  render() {
    const { statusText } = this.props;
    return(
      <TabViewContent>
        <textarea className="form-control" rows="3" disabled value={statusText} />
        <BootstrapButton text='Refresh' className='btn-info' onClick={this.handleRefresh}/>
      </TabViewContent>
    );
  }
}

export default VMStatusView;
