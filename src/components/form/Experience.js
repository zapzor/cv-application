import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <h3>Work Experience</h3>
        <input
          type='text'
          placeholder='Company name'
          name='company'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Position title'
          name='position'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Main activities'
          name='activities'
          onChange={handleChange}
        />
        <input
          type='date'
          placeholder='From'
          name='fromWork'
          onChange={handleChange}
        />
        <input
          type='date'
          placeholder='Until'
          name='untilWork'
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default Experience;
