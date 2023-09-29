import React, { Component } from 'react'

class welcome extends Component {
constructor(props){
  super(props)
}
  render() {
    return (
      <>
      <div>
        welcome to reactjs
      </div>
      <h1>
        hii my name is {this.props.name} and im from {this.props.city}
      </h1>
     
      </>

    )
  }
}

export default welcome


function change(){

}
