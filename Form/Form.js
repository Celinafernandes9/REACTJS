import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         email:"",
         number:"",
         message :""
      }
    }

    handelName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handelEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }

    handelPhone=(event)=>{
        this.setState({
            number:event.target.value
        })
    }

    handelMessage=(event)=>{
        this.setState({
            message:event.target.value
        })
    }
    
  render() {
    return (
      <>
        <div>
          <form>
            <label>Name: </label>
            <input  type="text" placeholder="Enter your name" value={this.state.name} onChange={this.handelName}></input><br></br><br/>

            <label>Email: </label>
            <input  type="text" placeholder="Enter your Email" value={this.state.email} onChange={this.handelEmail}></input><br></br><br/>

            <label>Phone No: </label>
            <input  type="text" placeholder="Enter your number" maxLength="10" value={this.state.number} onChange={this.handelPhone}></input><br></br><br/>

            <label>Adress: </label>
            <textarea type="text" value={this.state.message} onChange={this.handelMessage}/><br></br><br/>

            <label>Graduation: </label>
            <select>
                <option>BSC CS</option>
                <option>BCOM</option>
                <option></option>
                <option>BSC CS</option>
            </select>
            <button type="button">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
