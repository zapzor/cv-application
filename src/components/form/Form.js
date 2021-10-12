import React, { useState } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';
import Results from './Results';

export default function Form(props) {
  const [form, setFormValue] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phoneNumber: '',
    qualifications: '',
    university: '',
    fromEducation: '',
    untilEducation: '',
    company: '',
    position: '',
    activities: '',
    fromWork: '',
    untilWork: '',
  });
  const [formDisplay, setFormDisplay] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setFormDisplay((formDisplay) => !formDisplay);
  }

  function handleChange(event) {
    const { value, name } = event.target;

    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function redoForm() {
    setFormDisplay((formDisplay) => !formDisplay);
  }

  let displayControl = formDisplay ? 'display' : 'notDisplayed';

  return (
    <div>
      <form className={displayControl} onSubmit={handleSubmit}>
        <General handleChange={handleChange} />
        <Education handleChange={handleChange} />
        <Experience handleChange={handleChange} />
        <button type='submit' value='Submit'>
          Submit
        </button>
      </form>
      <Results
        firstName={form.firstName}
        lastName={form.lastName}
        title={form.title}
        email={form.email}
        phoneNumber={form.phoneNumber}
        qualifications={form.qualifications}
        university={form.university}
        fromEducation={form.fromEducation}
        untilEducation={form.untilEducation}
        company={form.company}
        position={form.position}
        activities={form.activities}
        fromWork={form.fromWork}
        untilWork={form.untilWork}
        formDisplay={formDisplay}
        redoForm={redoForm}
      />
    </div>
  );
}
