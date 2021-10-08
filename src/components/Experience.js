import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    return (
      <div>
        <h3>Work Experience</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Company name' required />
          <input type='text' placeholder='Position title' required />
          <input type='text' placeholder='Main activities' required />
          <input type='text' placeholder='From' required />
          <input type='text' placeholder='Until' required />
        </form>
      </div>
    );
  }
}

export default Experience;
