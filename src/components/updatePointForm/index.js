import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Header, Message, Segment, TextArea, Select } from "semantic-ui-react";

class UpdatePointForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.point.name,
      description: this.props.point.description,
      category: '',
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />
    }
  }
  handleChange(event, result) {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.handleUpdatePoint(this.props.point._id, this.state.name, this.state.description, this.state.category);
    this.setRedirect();
  }

  render() {
    if (this.props.options != null) {
      const categories = this.props.options.map(category => {
        return {key: category._id, text: category.name, value: category.name.toLocaleLowerCase()};
      });
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
                options={categories}
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
    } else {
      return (
        <div>Loading</div>
      )
    }
  }
}

export default UpdatePointForm;