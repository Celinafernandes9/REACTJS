import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp' 

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "ABC"
      }
    }
    
    componentDidMount(){
      setInterval(()=>{
        this.setState({
          name: "XYZ"
        })
      },4000)
    }
     
  render() {
    console.log("Parent component");
    return (
        <>
      <div>
        Parent Component
      </div>
      <RegComp name={this.state.name}/>
      <PureComp name={this.state.name}/>

     
      </>
    )
  }
}

export default ParentComp
