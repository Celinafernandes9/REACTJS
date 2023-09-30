import React, { Component } from "react";

class Conditionalrender extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  
  render() {
    // IF ELSE STATEMENT

    //   if (isLoggedIn) {
    //       return <h2>Welcome</h2>
    //     }
    //     else{
    //         return <h2>In this satement we have to use return keyword for every condition</h2>
    //     }

    // TERNARY OPERATOR
    
    // return (isLoggedIn)? <h2>Welcome</h2> : <h2>In this satement we have to use only one return condition</h2>

    // Element VARAIBLE
    
    // let text;
    // if (isLoggedIn) {
    //     text= <h1>Welcome</h1>;
    // } else {
    //    text= <h1>We are using element vairable</h1>
    // }
    // return <h2>{text}</h2>

    // SHORT CIRCUIT OPERATOR
   
    return  this.state.isLoggedIn && <h1>Welcome</h1>
  }
}

export default Conditionalrender;
