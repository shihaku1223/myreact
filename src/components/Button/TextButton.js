import React from 'react';
import PropTypes from 'prop-types';

const style = {
  textDecoration: 'underline'
}

const TextButton = (progs) => (
      <div onClick={progs.onClick}>
        <div style={style}>
          {progs.text}
        </div>
      </div>
);

TextButton.defaultProps = {
  text: 'Button'
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default TextButton;
