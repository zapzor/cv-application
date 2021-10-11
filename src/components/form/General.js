import React, { Component } from 'react';

export class General extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <h3>General information</h3>
        <input
          type='text'
          placeholder='First name'
          name='firstName'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Title'
          name='title'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Phone Number'
          name='phoneNumber'
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default General;

//fetch names from general and then send value to main
