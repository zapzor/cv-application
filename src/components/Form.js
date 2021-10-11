import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { handleChange, formDisplay, handleSubmit } = this.props;
    let displayControl = formDisplay ? 'display' : 'notDisplayed';

    return (
      <div>
        <form className={displayControl} onSubmit={handleSubmit}>
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
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Phone Number'
            name='phoneNumber'
            onChange={handleChange}
          />
          <h3>Education</h3>
          <input
            type='text'
            placeholder='Qualification'
            name='qualification'
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
            type='text'
            placeholder='From'
            name='fromWork'
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Until'
            name='untilWork'
            onChange={handleChange}
          />
          <br />
          <br />
          <button type='submit' value='Submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
