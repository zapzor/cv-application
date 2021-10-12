import React from 'react';

export default function Education(props) {
  const { handleChange } = props;

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
        type='date'
        placeholder='From'
        name='fromEducation'
        onChange={handleChange}
      />
      <input
        type='date'
        placeholder='Until'
        name='untilEducation'
        onChange={handleChange}
      />
    </div>
  );
}
