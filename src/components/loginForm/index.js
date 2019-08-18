import React, { Component } from 'react';
import { Button, Form, Header, Segment } from "semantic-ui-react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log(`Login form submitted: ${this.state.email} ${this.state.password}`);
    this.setState({
      email: '',
      password: ''
    });
  }
  render() {

    return (
      <Segment>
        <Header as="h3">Log-in</Header>
        <Form size="large" onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            placeholder="Email address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <Button color="blue" size="large">Login</Button>
        </Form>
      </Segment>
    )
  }
}

export default LoginForm;