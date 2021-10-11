import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    return (
      <div>
        <h3>Work Experience</h3>
        <form onSubmit={this.onSubmit}></form>
      </div>
    );
  }
}

export default Experience;
