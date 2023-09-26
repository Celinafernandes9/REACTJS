import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: " ",
      title: "  ",
      body: " ",
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <>
        <h3>Form</h3>
        <div>
          <form onSubmit={this.submit}>
            <label>UserId: </label>
            <input
              style={{ marginBottom: "5px", marginTop: "8px" }}
              type="text"
              name="userId"
              value={userId}
              onChange={this.change}
            />
            <br></br>

            <label>Title: </label>
            <input
              style={{ marginBottom: "5px" }}
              type="text"
              name="title"
              value={title}
              onChange={this.change}
            />
            <br></br>

            <label>Body: </label>
            <input
              style={{ marginBottom: "5px" }}
              type="text"
              name="body"
              value={body}
              onChange={this.change}
            />
            <br></br>

            <button style={{ margin: "5px", padding: "12px" }} type="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
