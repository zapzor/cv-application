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
      fromEducation: '',
      untilEducation: '',
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
    this.redoForm = this.redoForm.bind(this);
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

  redoForm() {
    this.setState({ formDisplay: !this.state.formDisplay });
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
          title={this.state.title}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          qualifications={this.state.qualifications}
          university={this.state.university}
          fromEducation={this.state.fromEducation}
          untilEducation={this.state.untilEducation}
          company={this.state.company}
          position={this.state.position}
          activities={this.state.activities}
          fromWork={this.state.fromWork}
          untilWork={this.state.untilWork}
          formDisplay={this.state.formDisplay}
          redoForm={this.redoForm}
        />
      </div>
    );
  }
}

export default Main;
