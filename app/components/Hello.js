import React, { Component, PropTypes } from 'react'

class Hello extends Component {
  constructor() {
    super()
    this.state = {
      isClicked: false
    }
  }

  onclick = (e) => {
    this.setState({isClicked: true})
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <h1>Hello World</h1>
          <button onClick = {this.onclick}> Click</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick = {this.onclick}> Click</button>
        </div>
      )
    }
  
  }
}

export default Hello;