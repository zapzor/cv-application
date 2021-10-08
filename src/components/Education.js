import React, { Component } from 'react';

export class Education extends Component {
  render() {
    return (
      <div>
        <h3>Education and training</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Qualification' required />
          <input type='text' placeholder='University' required />
          <input type='text' placeholder='From' required />
          <input type='text' placeholder='Until' required />
        </form>
      </div>
    );
  }
}

export default Education;
