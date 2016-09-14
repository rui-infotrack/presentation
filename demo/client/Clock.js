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
      <div>
        <i className="large material-icons">av_timer</i>
        <h3 style={{ display: 'inline-block', position: 'absolute' }}>{this.state.displayTime}</h3>
      </div>
    );
  }
}

export default Clock;
