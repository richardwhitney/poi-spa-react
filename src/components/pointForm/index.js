import React, { Component, Fragment } from 'react';
import { Button, Form, Header, Message, Segment, TextArea, Select } from "semantic-ui-react";


class PointForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      category: ''
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
    console.log(`Point form submitted: ${this.state.name} ${this.state.description} ${this.state.category}`);
    this.props.handleAddPoint(this.state.name, this.state.description, this.state.category);
    this.setState({
      name: '',
      description: '',
      category: ''
    });
  }

  render() {
    return (
      <Fragment>
        <Header as="h3">Add Island</Header>
        <Segment>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Form.Field
              label="Category"
              control={Select}
              selection
              options={this.props.options}
              placeholder="Category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <Button color="blue" size="large">Add</Button>
          </Form>
        </Segment>
      </Fragment>
    )
  }
}

export default PointForm;