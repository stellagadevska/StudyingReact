import React, { Component } from "react";

class MultipleForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showsData: false,
      
      name: "",
      duration: "",
      year: "",
      restrictions: "",
      language: "",
      subtitles: "",
      company: "",
      class: "",
      info: "",
    };
  }

  handleOnChangeName = (e) => this.setState({name: e.target.value})
  handleOnChangeDuration = (e) => this.setState({duration: e.target.value})
  handleOnChangeYear = (e) => this.setState({year: e.target.value})
  handleOnChangeRestrictions = (e) => this.setState({restrictions: e.target.value})
 
  handleOnClick = (e) => this.setState({showsData: true, value: e.target.value})
  handleClean = () => {
    this.setState({showsData: false})
  }
  
  render() {
    return (
      <div>
        <label>Name: </label>
        <input type="text" onChange={this.handleOnChangeName} value={this.state.name}></input>
        <br></br>

        <label>Duration: </label>
        <input type="text" onChange={this.handleOnChangeDuration} value={this.state.duration}></input>
        <br></br>

        <label>Year: </label>
        <input type="text" onChange={this.handleOnChangeYear} value={this.state.year}></input>
        <br></br>

        <label>Restrictions: </label>
        <input type="text" onChange={this.handleOnChangeRestrictions} value={this.state.restrictions}></input>
        <br></br>

        <label>Language: </label>
        <input type="text"></input>
        <br></br>

        <label>Subtitles: </label>
        <input type="text"></input>
        <br></br>

        <label>Company: </label>
        <input type="text"></input>
        <br></br>

        <label>Class: </label>
        <input type="text"></input>
        <br></br>

        <label>Info: </label>
        <input type="text"></input>
        <br></br>
        
        <button onClick={this.handleOnClick}>Save</button>
        <br></br>
        <button onClick={this.handleClean}>Clean</button>

        <p>{this.state.showsData ? "Name: " + this.state.name : ""}
        <br></br>
        {this.state.showsData ? "Duration: " + this.state.duration : ""}
        <br></br>
        {this.state.showsData ? "Year: " + this.state.year : ""}
        <br></br>
        {this.state.showsData ? "Restrictions: " + this.state.restrictions : ""}
        </p>
     

        
      </div>
    );
  }
}

export default MultipleForms;

