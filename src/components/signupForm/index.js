import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Header, Segment } from "semantic-ui-react";
import axios from "axios";

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
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:3002/api/users', user)
      .then(res => {
        axios.post('http://localhost:3002/api/users/authenticate', {
          email: res.data.email,
          password: res.data.password
        }).then(res => {
          localStorage.setItem('poi-jwt', res.data.token);
          this.props.history.push('/dashboard');
        });
        //this.props.history.push('/dashboard');
      });
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

export default withRouter(SignupForm);