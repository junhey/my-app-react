import React, { Component } from 'react';

class Tick extends Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()}
  }
  render() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
    return element;
  }
}
export default Tick;



  