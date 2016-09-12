import React, { Component, PropTypes } from 'react';

class Greeting extends Component {
  render() {
    const { name } = this.props;

    return (
      <h3>Hello, {name}!</h3>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default Greeting;
