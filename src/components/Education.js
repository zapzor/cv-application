import React, { Component } from 'react';

export class Education extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <h3>Education</h3>
        <input
          type='text'
          placeholder='Qualifications'
          name='qualifications'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='University'
          name='university'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='From'
          name='fromEducation'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Until'
          name='untilEducation'
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default Education;
