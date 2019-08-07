import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";

class SignupForm extends Component {
  render() {
    return (
      <Segment>
        <Header as="h3">Register</Header>
        <Form size="large">
          <Form.Group widths="equal">
            <Form.Input
              label="First Name"
              fluid icon="user"
              iconPosition="left"
              placeholder="First Name"
            />
            <Form.Input
              label="Last Name"
              fluid icon="user"
              iconPosition="left"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Input
            label="Email"
            fluid icon="mail"
            iconPosition="left"
            placeholder="Email"
          />
          <Form.Input
            label="Password"
            fluid icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="blue" size="large">Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default SignupForm;