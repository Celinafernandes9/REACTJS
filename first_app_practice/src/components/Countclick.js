import React, { Component } from 'react'

class Countclick extends Component {
    constructor(props){
        super(props)
        this.state={
            count : 0
        }
    }
    countdown(){
        this.setState({
          count:this.state.count +1
        })
        console.log(this.state.count);
    }
  render() {
    return (
        <>
      <div>
        <h1>count - {this.setState.count} </h1>
        <button onClick={()=>this.countdown()}>click</button>
      </div>
      </>
    )
  }
}

export default Countclick
