import React from 'react'
import ReactDOM from 'react-dom'

class CanvasView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  render() {
    return (
      <canvas ref="canvas" width={300} height={300} />
    );
  }

  updateCanvas() {

  }

  componentDidMount() {
    console.log("componentDidMount")
  }
}

export default CanvasView
