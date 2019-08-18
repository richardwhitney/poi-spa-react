import React, { Component } from 'react';
import { Button, Form, Header, Segment } from "semantic-ui-react";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, result) {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Signup form submitted: ${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.password}`);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <Segment>
        <Header as="h3">Register</Header>
        <Form size="large" onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="First Name"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <Button color="blue" size="large">Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default SignupForm;