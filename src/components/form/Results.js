import React from 'react';

export default function Results(props) {
  let displayControl = props.formDisplay ? 'notDisplayed' : 'display';
  let {
    firstName,
    lastName,
    title,
    email,
    phoneNumber,
    qualifications,
    university,
    fromEducation,
    untilEducation,
    company,
    position,
    activities,
    fromWork,
    untilWork,
    redoForm,
  } = props;

  return (
    <div className={displayControl}>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name:{lastName}</li>
        <li>Title: {title}</li>
        <li>Email: {email}</li>
        <li>Phone Number: {phoneNumber}</li>
        <li>Qualifications:{qualifications}</li>
        <li>University: {university}</li>
        <li>From: {fromEducation}</li>
        <li>Until: {untilEducation}</li>
        <li>Company Name: {company}</li>
        <li>Position Title: {position}</li>
        <li>Main Activities: {activities}</li>
        <li>From: {fromWork}</li>
        <li>Until: {untilWork}</li>
      </ul>

      <button onClick={redoForm}>Redo</button>
    </div>
  );
}
