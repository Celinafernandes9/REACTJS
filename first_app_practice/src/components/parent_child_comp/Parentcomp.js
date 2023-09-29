import React, { Component } from 'react'
import Childcomp from './Childcomp';

export class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Celina"   
      }
      this.parent = this.parent.bind(this)
    }

    parent(course){
        alert(`Hiii! my name is ${this.state.name} and I'm a ${course}`);
    }
    
  render() {
    return (
      <div>
        <h1>Parent component</h1>
        
        <Childcomp parentone={this.parent}/>
      </div>
    )
  }
}

export default Parentcomp
