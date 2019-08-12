import React, { Component } from 'react';
import { Menu, Accordion } from "semantic-ui-react";

class SideBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }
  }

  onAccordionChange = (index) => {
    this.setState({
      values: (this.state.values.indexOf(index) !== -1) ? [] : [index]
    });
  }

  render() {
    return (
      <Menu.Item>
        <Accordion inverted activeIndexes={this.state.values} onAccordionChange={this.onAccordionChange}>
          <Accordion.Title index={1}>First</Accordion.Title>
          <Accordion.Content>First content</Accordion.Content>
        </Accordion>
      </Menu.Item>
    );
  }
}

export default SideBarItem;