import React, { Component } from "react";

export class Events extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //  msg: "This is first Event type"
      //  msg: "This is second Event type"
      //  msg: "This is third Event type"
      msg: "This is fourth Event type"
    }
    // this.clickhandler = this.clickhandler.bind(this)

  }
  clickHandler = () => {
    this.setState({
      msg: "Class property as a arrow function"
    });
  }
  // clickhandler(){
  //     this.setState({
  //         // msg:"Binding event in render()"
  //         // msg:"Arrow function in render()"
  //         // msg:"Binding in class constructor"
  //     })
  // }

  render() {
    return (
      <>
        <div>
          <h1>EVENTS HANDLING</h1>
          <h2>{this.state.msg}</h2>
          {/* Binding event in render() */}
          {/* <button onClick={this.clickhandler.bind(this)}>click me</button> */}

          {/* Arrow function in render()  */}
          {/* <button onClick={()=>this.clickhandler()}>click me</button> */}

          {/* msg:"Binding in class constructor */}
          {/* <button onClick={this.clickhandler}>click me</button> */}

          {/* Class property as a arrow function */}
          <button onClick={this.clickHandler}>click me</button>
        </div>
      </>
    );
  }
}

export default Events;
