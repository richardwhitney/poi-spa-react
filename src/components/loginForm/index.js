import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Header, Segment } from "semantic-ui-react";
import axios from "axios";

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
    axios.post('http://localhost:3002/api/users/authenticate', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      localStorage.setItem('poi-jwt', res.data.token);
      this.props.history.push('/dashboard');
    });
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

export default withRouter(LoginForm);