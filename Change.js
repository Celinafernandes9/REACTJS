import React, { Component } from 'react'

class Change extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg: "WELCOME TO REACT"
        }
    }
click(){
    this.setState({
      msg : "welcome to our react change msg"
    })
}
  render() {
    return (
        <>
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={()=>this.click()}>change</button>
      </div>
      </>
    )
  }
}

export default Change
