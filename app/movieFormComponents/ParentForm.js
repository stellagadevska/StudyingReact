import React, { Component } from "react";
import FormA from "./FormA";
import FormB from "./FormB";
import FormC from "./FormC";

class ParentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayButton: false,
      selectedName: "",
      selectedDuration: "",
      selectedYear: "",
      selectedRestrictions: "",
      selectedLanguage: "",
      selectedSubtitles: "",
      selectedCompany: "",
      selectedClass: "",
      selectedInfo: "",
      selectedOscar: "",
      selectedDownload: "",
    };
  }

  handleOnClick = () => {
    this.setState({ displayButton: true });
  };

  handleClean = () => {
    this.setState({ displayButton: false });
  };

  handleInputName = (movieName) => {
    this.setState({ selectedName: movieName });
  };

  handleInputDuration = (movieDuration) => {
    this.setState({ selectedDuration: movieDuration });
  };

  handleInputYear = (movieYear) => {
    this.setState({ selectedYear: movieYear });
  };

  handleInputRestrictions = (movieRestrictions) => {
    this.setState({ selectedRestrictions: movieRestrictions });
  };

  handleInputLanguage = (movieLanguage) => {
    this.setState({ selectedLanguage: movieLanguage });
  };

  handleInputSubtitles = (movieSubtitles) => {
    this.setState({ selectedSubtitles: movieSubtitles });
  };

  handleInputCompany = (movieCompany) => {
    this.setState({ selectedCompany: movieCompany });
  };

  handleInputClass = (movieClass) => {
    this.setState({ selectedClass: movieClass });
  };

  handleInputInfo = (movieInfo) => {
    this.setState({ selectedInfo: movieInfo });
  };

  handleInputOscar = (movieOscar) => {
    this.setState({ selectedOscar: movieOscar });
  };

  handleInputDownload = (movieDownload) => {
    this.setState({ selectedDownload: movieDownload });
  };

  render() {
    if (this.state.displayButton) {
      return (
        <div>
          <p>
            Movie Name: {this.state.selectedName}
            <br />
            Movie Duration: {this.state.selectedDuration}
            <br />
            Movie Year: {this.state.selectedYear}
            <br />
            Movie Restrictions: {this.state.selectedRestrictions}
            <br />
            Movie Language: {this.state.selectedLanguage}
            <br />
            Movie Subtitles: {this.state.selectedSubtitles}
            <br />
            Movie Company: {this.state.selectedCompany}
            <br />
            Movie Class: {this.state.selectedClass}
            <br />
            Movie Info: {this.state.selectedInfo}
            <br />
            Movie Oscar: {this.state.selectedOscar}
            <br />
            Movie Download: {this.state.selectedDownload}
          </p>

          <button onClick={this.handleOnClick}>Save</button>
          <button onClick={this.handleClean}>Clean</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2> About Movie: </h2>
          <FormA
            type="text"
            handleName={this.handleInputName}
            handleDuration={this.handleInputDuration}
            handleYear={this.handleInputYear}
            handleRestrictions={this.handleInputRestrictions}
          />

          <FormB
            type="text"
            handleLanguage={this.handleInputLanguage}
            handleSubtitles={this.handleInputSubtitles}
            handleCompany={this.handleInputCompany}
            handleClass={this.handleInputClass}
            handleInfo={this.handleInputInfo}
          />

          <FormC
            type="text"
            handleOscar={this.handleInputOscar}
            handleDownload={this.handleInputDownload}
          />
          <button onClick={this.handleOnClick}>Save</button>
          <button onClick={this.handleClean}>Clean</button>
        </div>
      );
    }
  }
}

export default ParentForm;
