import React, { Component } from 'react'

class EffectClass extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0,
      value : ""
    }
  } 

  componentDidMount() {
    document.title = `Count ${this.state.count}`
  }

  componentDidUpdate(prevprops, prevstate) {
    if(prevstate.count !== this.state.count){
      document.title = `Count ${this.state.count}`
      console.log("Render")
    }
  }

  render() {
    return (
      <>
      <input 
        type="text" 
        value={this.state.value}
        onChange={(e) => this.setState({value : e.target.value})}  
        /> 
      <button onClick={() => this.setState({count : this.state.count + 1 })}>Count - {this.state.count}</button>
      </>
    )
  }
}

export default EffectClass