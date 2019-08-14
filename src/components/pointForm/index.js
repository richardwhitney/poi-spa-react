import React, { Component, Fragment } from 'react';
import { Button, Form, Grid, Header, Message, Segment, TextArea, Select } from "semantic-ui-react";


class PointForm extends Component {
  render() {
    return (
      <Fragment>
        <Header as="h3">Add Island</Header>
        <Segment>
          <Form size="large">
            <Form.Field
              control={Select}
              label="Category"
              options={this.props.options}
              placeholder="Category"
            />
            <Form.Input
              label="Name"
              placeholder="Name"
            />
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Description"
            />
            <Button color="blue" size="large">Add</Button>
          </Form>
        </Segment>
      </Fragment>
    )
  }
}

export default PointForm;