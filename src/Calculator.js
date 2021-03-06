import React, { Component } from 'react';
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature:'' }
  }
  handleChange(e){
    this.setState({temperature:e.target.value})
  }
  render(){
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <br />
        <span>{temperature}</span>

      </fieldset>
    );
  }
}

export default Calculator;