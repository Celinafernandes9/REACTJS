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
        console.log("LIFECYCLE getDerivedStateFromProps");
        return null;   
    }
    
    componentDidMount(){
        console.log('LIFECYCLE componentDidMount');
    }

    // updating method
    shouldComponentUpdate(){
      console.log("LIFECYCLE shouldComponentUpdate");
      return true
    }

    getSnapshotBeforeUpdate(){
      console.log("LIFECYCLE getSnapshotBeforeUpdate");
      return null
    }

    componentDidUpdate(){
      console.log("LIFECYCLE componentDidUpdate");
    }

    Update = ()=>{
     this.setState({name:"Angular"})
    }

  render() {
    console.log('LIFECYCLE Render');
    return (
        <>
      <div>
        LifeCycleMethod
      </div>
      <p style={{fontWeight:'bold'}} onChange={this.Update}>My course name is {this.state.name}</p>
      <button style={{marginBottom:"10px"}} type='button' onClick={this.Update}>UPDATE ME</button>
      <LifeCycleMethod2/>
      </>
    )
  }
}

export default LifeCycleMethod
