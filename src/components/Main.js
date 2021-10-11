import React from 'react';
import Form from './Form';
import Results from './Results';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      phoneNumber: '',
      qualifications: '',
      university: '',
      from: '',
      until: '',
      company: '',
      position: '',
      activities: '',
      fromWork: '',
      untilWork: '',

      formDisplay: true,
      cvDisplay: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ formDisplay: !this.state.formDisplay });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formDisplay={this.state.formDisplay}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <Results
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          formDisplay={this.state.formDisplay}
        />
      </div>
    );
  }
}

export default Main;
