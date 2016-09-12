import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      displayTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.scheduleUpdate();
  }

  scheduleUpdate() {
    const updateCallback = () => {
      this.setState({ displayTime: new Date().toLocaleTimeString() });
    };
    setInterval(updateCallback.bind(this), 1000);
  }

  render() {
    return (
      <h3>{this.state.displayTime}</h3>
    );
  }
}

export default Clock;
