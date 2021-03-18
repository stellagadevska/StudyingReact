import React, { Component } from "react";

class FormB extends Component {
  constructor() {
    super();

    this.state = {
      selectedLanguage: "",
      selectedSubtitles: "",
      selectedCompany: "",
      selectedClass: "",
      selectedInfo: "",
    };
  }

  handleOnChangeLanguage = (e) => {
    this.setState({ selectedLanguage: e.target.value });
    this.props.handleLanguage(e.target.value);
  };

  handleOnChangeSubtitles = (e) => {
    this.setState({ selectedSubtitles: e.target.value });
    this.props.handleSubtitles(e.target.value);
  };

  handleOnChangeCompany = (e) => {
    this.setState({ selectedCompany: e.target.value });
    this.props.handleCompany(e.target.value);
  };

  handleOnChangeClass = (e) => {
    this.setState({ selectedClass: e.target.value });
    this.props.handleClass(e.target.value);
  };

  handleOnChangeInfo = (e) => {
    this.setState({ selectedInfo: e.target.value });
    this.props.handleInfo(e.target.value);
  };

  render() {
    return (
      <div>
        <label>Language: </label>
        <input
          value={this.state.selectedLanguage}
          onChange={this.handleOnChangeLanguage}
        />
        <br />
        <label>Subtitles: </label>
        <input
          value={this.state.selectedSubtitles}
          onChange={this.handleOnChangeSubtitles}
        />
        <br />
        <label>Company: </label>
        <input
          value={this.state.selectedCompany}
          onChange={this.handleOnChangeCompany}
        />
        <br />
        <label>Class: </label>
        <input
          value={this.state.selectedClass}
          onChange={this.handleOnChangeClass}
        />
        <br />
        <label>Info: </label>
        <input
          value={this.state.selectedInfo}
          onChange={this.handleOnChangeInfo}
        />
      </div>
    );
  }
}

export default FormB;
