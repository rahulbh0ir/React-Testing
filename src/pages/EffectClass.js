import React, { Component } from 'react'

class EffectClass extends Component {
  constructor(props){
    super(props)
    this.state = {
      x : 0,
      y : 0
    }
  } 

  func = (e) => {
    this.setState({ x : e.clientX, y : e.clientY})
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.func)
  }

  render() {
    return (
      <>
      <p>X - {this.state.x}</p>
      <p>Y - {this.state.y}</p>
      </>
    )
  }
}

export default EffectClass