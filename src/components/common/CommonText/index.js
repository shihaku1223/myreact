import React from 'react'; 
import PropTypes from 'prop-types';

class CommonText extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        {text}
      </div>
    );
  }
}

export default CommonText;
