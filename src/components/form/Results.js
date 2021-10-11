import React, { Component } from 'react';

class Results extends Component {
  render() {
    let control = this.props.formDisplay ? 'notDisplayed' : 'display';

    return (
      <div className={control}>
        <div>First name: {this.props.firstName}</div>
        <div>Last name:{this.props.lastName}</div>
        <div>Title: {this.props.title}</div>
        <div>Email: {this.props.email}</div>
        <div>Phone Number: {this.props.phoneNumber}</div>
        <div>Qualifications:{this.props.qualifications}</div>
        <div>University: {this.props.university}</div>
        <div>From: {this.props.fromEducation}</div>
        <div>Until: {this.props.untilEducation}</div>
        <div>Company Name: {this.props.company}</div>
        <div>Position Title: {this.props.position}</div>
        <div>Main Activities: {this.props.activities}</div>
        <div>From: {this.props.workFrom}</div>
        <div>Until: {this.props.workUntil}</div>
        <button onClick={this.props.redoForm}>Redo</button>
      </div>
    );
  }
}

export default Results;
