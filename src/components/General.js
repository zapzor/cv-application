import React, { Component } from 'react';

export class General extends Component {
  render() {
    return (
      <div>
        <h3>General Information</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='First name' required />
          <input type='text' placeholder='Last Name' required />
          <input type='text' placeholder='Title' />
          <input type='text' placeholder='Email' required />
          <input type='text' placeholder='Phone Number' required />
        </form>
      </div>
    );
  }
}

export default General;
