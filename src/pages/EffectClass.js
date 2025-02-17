import React, { Component } from 'react'

class EffectClass extends Component {

  constructor(props) {
    super(props)
    this.state = {
        count : 0
    }
  }  

  componentDidMount() {
    document.title = `Count - ${this.state.count}`
  }

  componentDidUpdate() {
    document.title = `Count - ${this.state.count}`
  } 

  render() {
    return (
      <>
      <button onClick={() => {this.setState({count : this.state.count + 1})}}>Count - {this.state.count}</button>     
      </>
    )
  }
}

export default EffectClass