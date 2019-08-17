import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Header, Message, Segment, TextArea, Select } from "semantic-ui-react";
import api from "../../dataStore/stubApi";


class UpdatePointForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      category: '',
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const point = api.getPoint(this.props.id);
    this.setState({
      name: point.name,
      description: point.description
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
  }
  handleChange(event, result) {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Update Form submitted: ${this.props.id} ${this.state.name} ${this.state.description} ${this.state.category}`);
    this.props.handleUpdatePoint(this.props.id, this.state.name, this.state.description, this.state.category);
    this.setRedirect();
  }

  render() {

    return (
      <Fragment>
        {this.renderRedirect()}
        <Header as="h3">Update Island</Header>
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
            <Button color="blue" size="large">Update</Button>
          </Form>
        </Segment>
      </Fragment>
    )
  }
}

export default UpdatePointForm;