import React, { Component } from 'react';

class Results extends Component {
  render() {
    let control = this.props.formDisplay ? 'notDisplayed' : 'display';

    return (
      <div className={control}>
        <ul>
          <li>First name: {this.props.firstName}</li>
          <li>Last name:{this.props.lastName}</li>
          <li>Title: {this.props.title}</li>
          <li>Email: {this.props.email}</li>
          <li>Phone Number: {this.props.phoneNumber}</li>
          <li>Qualifications:{this.props.qualifications}</li>
          <li>University: {this.props.university}</li>
          <li>From: {this.props.fromEducation}</li>
          <li>Until: {this.props.untilEducation}</li>
          <li>Company Name: {this.props.company}</li>
          <li>Position Title: {this.props.position}</li>
          <li>Main Activities: {this.props.activities}</li>
          <li>From: {this.props.workFrom}</li>
          <li>Until: {this.props.workUntil}</li>
        </ul>

        <button onClick={this.props.redoForm}>Redo</button>
      </div>
    );
  }
}

export default Results;
