import React, { Component } from 'react';
import { Menu, Accordion, Header } from 'semantic-ui-react';
import SideBarItem from '../sidebarItem';

class SideBar extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Accordion as={Menu} inverted vertical fixed="left">
        <Menu.Item>
          <Header inverted as="h5">Categories</Header>
        </Menu.Item>

        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 0}
            content="Test"
            index={0}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 0} content="This is a test" />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIndex === 1}
            content="Another test"
            index={1}
            onClick={this.handleClick}
          />
          <Accordion.Content active={activeIndex === 1} content="This is another test" />
        </Menu.Item>
      </Accordion>
    )
  }
}

export default SideBar;