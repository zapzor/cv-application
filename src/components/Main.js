import React from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';
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
    const { formDisplay } = this.state;

    let displayControl = formDisplay ? 'display' : 'notDisplayed';
    return (
      <div>
        <form className={displayControl} onSubmit={this.handleSubmit}>
          <General handleChange={this.handleChange} />
          <Education handleChange={this.handleChange} />
          <Experience handleChange={this.handleChange} />
          <button type='submit' value='Submit'>
            Submit
          </button>
        </form>
        <Results
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          qualifications={this.state.qualifications}
          company={this.state.company}
          formDisplay={this.state.formDisplay}
        />
      </div>
    );
  }
}

export default Main;
