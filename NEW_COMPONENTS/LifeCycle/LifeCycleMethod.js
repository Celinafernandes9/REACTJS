import React, { Component } from 'react'
import LifeCycleMethod2 from './LifeCycleMethod2';

class LifeCycleMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "React"
      }
      console.log("LIFECYCLE Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LIFECYCLE getDerivedStateFromProps method");
        return null;   
    }
    
    componentDidMount(){
        console.log('LIFECYCLE componentDidMount');
    }
  render() {
    console.log('LIFECYCLE Render');
    return (
        <>
      <div>
        LifeCycleMethod
      </div>
      <LifeCycleMethod2/>
      </>
    )
  }
}

export default LifeCycleMethod
