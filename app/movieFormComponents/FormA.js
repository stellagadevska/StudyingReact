import React, { Component } from "react";

class FormA extends Component {
  constructor() {
    super();
    this.state = {
      selectedName: "",
      selectedDuration: "",
      selectedYear: "",
      selectedRestrictions: "",
    };
  }

  handleOnChangeName = (e) => {
    this.setState({ selectedName: e.target.value });
    this.props.handleName(e.target.value);
  };

  handleOnChangeDuration = (e) => {
    this.setState({ selectedDuration: e.target.value });
    this.props.handleDuration(e.target.value);
  };

  handleOnChangeYear = (e) => {
    this.setState({ selectedYear: e.target.value });
    this.props.handleYear(e.target.value);
  };

  handleOnChangeRestrictions = (e) => {
    this.setState({ selectedRestrictions: e.target.value });
    this.props.handleRestrictions(e.target.value);
  };

  render() {
    return (
      <div>
        <label>Name: </label>
        <input
          value={this.state.selectedName}
          onChange={this.handleOnChangeName}
        />
        <br />
        <label>Duration: </label>
        <input
          value={this.state.selectedDuration}
          onChange={this.handleOnChangeDuration}
        />
        <br />
        <label>Year: </label>
        <input
          value={this.state.selectedYear}
          onChange={this.handleOnChangeYear}
        />
        <br />
        <label>Restrictions: </label>
        <input
          value={this.state.selectedRestrictions}
          onChange={this.handleOnChangeRestrictions}
        />
      </div>
    );
  }
}

export default FormA;
