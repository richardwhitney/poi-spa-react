import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";

class LoginForm extends Component {
  render() {

    return (
      <Segment>
        <Form size="large">
          <Form.Input
            fluid icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
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