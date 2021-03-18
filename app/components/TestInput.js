import React, { Component, PropTypes } from "react";

class TestInput extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", title: "", isClicked: false };
  }

  handleChange = (event) => {
    this.setState({ user: event.target.value });
  };

  handleOnClick = (e) => {
    this.setState({ isClicked: true, title: this.state.user });
  };

  handleClean = (e) => {
    this.setState({isClicked: false})
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.isClicked ? this.state.title : ""}</h1>

        <input
          type="text"
          name="title"
          value={this.state.user}
          onChange={this.handleChange}
        />

        <input type="submit" value="OK" onClick={this.handleOnClick} />
        <button onClick={this.handleClean}>Clean</button>
      </div>
    );
  }
}

export default TestInput;
