import React, { Component } from 'react';
import { Modal, Button, Form, Icon, Menu } from "semantic-ui-react";

class SideBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: '',
      showModal: false
    }
  }

  handleChangeForms = (e, { value }) => {
    this.setState({ something: value });
  }

  handleCreateButton(evt) {
    evt.preventDefault()
    this.closeModal();
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const {
      something,
      showModal
    } = this.state

    return (
      <Modal closeIcon onClose={this.closeModal} open={showModal} trigger={<a onClick={() => this.setState({ showModal: true })}>Add Category</a>}>
        <Modal.Header>Add Category</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label='Name'
              value={something}
              onChange={this.handleChangeForms}
            />
            <Button color="blue" onClick={(evt) => this.handleCreateButton(evt)}>Save</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default SideBarItem;