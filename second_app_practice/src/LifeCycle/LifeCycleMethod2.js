import React, { Component } from 'react'

class LifeCycleMethod2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "React"
        }
        console.log("#LIFECYCLE2 Constructor");
      }
  
      static getDerivedStateFromProps(props, state){
          console.log("#LIFECYCLE2 getDerivedStateFromProps method");
          return null;   
      }
      
      componentDidMount(){
          console.log('#LIFECYCLE2 componentDidMount');
      }

      // updating method
    shouldComponentUpdate(){
      console.log("#LIFECYCLE2 shouldComponentUpdate");
      return true
    }

    getSnapshotBeforeUpdate(){
      console.log("#LIFECYCLE2 getSnapshotBeforeUpdate");
      return null
    }

    componentDidUpdate(){
      console.log("#LIFECYCLE2 componentDidUpdate");
    }
  render() {
    console.log('#LIFECYCLE2 Render');
    return (
      <div>
        LifeCycleMethod2
      </div>
    )
  }
}

export default LifeCycleMethod2
