import React, { Component, Fragment } from 'react';
import { Button, Form, Header, Message, Segment, TextArea, Select } from "semantic-ui-react";


class PointForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      category: '',
      categoryId: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, result) {
    const {name, value} = result;
    this.setState({
      [name]: value,
    });
  }

  handleSelectChange(event, result) {
    const { value } = result;
    const { key } = result.options.find(o => o.value === value);
    this.setState({
      category: value,
      categoryId: key
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(`Point form submitted: ${this.state.name} ${this.state.description} ${this.state.categoryId}`);
    //await this.props.handleAddPoint(this.state.name, this.state.description, this.state.categoryId);
    this.props.handleAddPointLocal(this.state.name, this.state.description, this.state.category);
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
              onChange={this.handleSelectChange}
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