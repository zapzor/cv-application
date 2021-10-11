import React, { Component } from 'react';

export class Education extends Component {
  render() {
    return (
      <div>
        <h3>Education and training</h3>
        <form onSubmit={this.onSubmit}></form>
      </div>
    );
  }
}

export default Education;
