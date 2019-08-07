import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";

class LoginForm extends Component {
  render() {

    return (
      <Segment>
        <Header as="h3">Log-in</Header>
        <Form size="large">
          <Form.Input
            label="Email"
            fluid icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            label="Password"
            fluid icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="blue" size="large">Login</Button>
        </Form>
      </Segment>
    )
  }
}

export default LoginForm;