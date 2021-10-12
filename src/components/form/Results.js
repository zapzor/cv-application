import React from 'react';

export default function Results(props) {
  let displayControl = props.formDisplay ? 'notDisplayed' : 'display';
  let {
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
    workFrom,
    workUntil,
    redoForm,
  } = props;

  return (
    <div className={displayControl}>
      <ul>
        <li value={props.firstName}>First name: {props.firstName}</li>
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
        <li>From: {workFrom}</li>
        <li>Until: {workUntil}</li>
      </ul>

      <button onClick={redoForm}>Redo</button>
    </div>
  );
}
