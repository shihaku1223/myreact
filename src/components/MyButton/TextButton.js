import React from 'react'

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

TextButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
}

export default TextButton
