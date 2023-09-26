import React, { Component } from "react";
import form from "../Form/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      number: "",
      address: "",
      graduation: "",
    };
  }

  handelName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handelEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handelPhone = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  handeladdress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handeloption = (event) => {
    this.setState({
      graduation: event.target.value,
    });
  };

  handelSubmit = (event) => {
    alert(
      `USERNAME: ${this.state.name}\n EMAIL: ${this.state.email}\n PHONE NO: ${this.state.number}\n AADRESS: ${this.state.address}\n GRADUATION: ${this.state.graduation}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className="container">
          <form onSubmit={this.handelSubmit}>
            <h1 className="heading">REGISTRATION FORM</h1>

            <label>Name: </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.handelName}
            ></input>
            <br></br>
            <br />

            <label>Email: </label>
            <input
              type="text"
              placeholder="Enter your Email"
              value={this.state.email}
              onChange={this.handelEmail}
            ></input>
            <br></br>
            <br />

            <label>Phone No: </label>
            <input
              type="text"
              placeholder="Enter your number"
              maxLength="10"
              value={this.state.number}
              onChange={this.handelPhone}
            ></input>
            <br></br>
            <br />

            <label>Adress: </label>
            <textarea
              type="text"
              value={this.state.address}
              onChange={this.handeladdress}
            />
            <br></br>
            <br />

            <label>Graduation: </label>
            <select value={this.state.graduation} onChange={this.handeloption}>
              <option value="BSC CS">BSC CS</option>
              <option value="BCOM">BCOM</option>
              <option value="MSC">MSC</option>
              <option value="MCA">MCA</option>
              <option value="B Tech">B Tech</option>
              <option value="BBA">BBA</option>
            </select>
            <br></br>
            <br />

            <button type="submit">Submit</button>
            <br></br>
            <br />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
