import React, { Component } from 'react';

class Results extends Component {
  render() {
    let control = this.props.formDisplay ? 'notDisplayed' : 'display';

    return (
      <div className={control}>
        <div>First name: {this.props.firstName}</div>
        <div>Last name:{this.props.lastName}</div>
        <div>Qualifications:{this.props.qualifications}</div>
        <div>Company Name: {this.props.company}</div>
      </div>
    );
  }
}

export default Results;
