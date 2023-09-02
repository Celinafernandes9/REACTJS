import React, { Component } from 'react'
import Memo from '../MemoComponent/memo'
// import RegComp from './RegComp'
import PureComp from './PureComp' 

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
           Text: "This is react memo"
      }
    }
    
    componentDidMount(){
      setInterval(()=>{
        this.setState({
          Text: "This is react memo"
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
      {/* <RegComp name={this.state.name}/> */}
      <PureComp name={this.state.Text}/>

      <Memo name={this.state.Text}/>
      </>
    )
  }
}

export default ParentComp
