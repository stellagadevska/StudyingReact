import React, { Component } from "react";

class FormC extends Component {
  constructor() {
    super();
    this.state = {
      selectedOscar: "",
      selectedDownload: ""
    };
  }

  handleOnChangeOscar = (e) => {
    this.setState({ selectedOscar: e.target.value });
    this.props.handleOscar(e.target.value);
  };

  handleOnChangeDownload = (e) => {
    this.setState({ selectedDownload: e.target.value });
    this.props.handleDownload(e.target.value);
  };

  render() {
    return (
      <div>
        <label>Oscar Nominee:</label>
        <input
          value={this.state.selectedOscar}
          onChange={this.handleOnChangeOscar}
        />
        <br />
        <label>Download:</label>
        <input
          value={this.state.selectedDownload}
          onChange={this.handleOnChangeDownload}
        />
      </div>
    );
  }
}

export default FormC;
