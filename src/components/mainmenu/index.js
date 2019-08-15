import React, {Component, Fragment} from 'react';
import { Menu, Segment, Sidebar, Icon, Header } from 'semantic-ui-react';
import LoginPage from '../loginPage';

class MainMenu extends Component {

  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {

    const { visible } = this.state

    return (
      <Menu inverted fixed="top">
        <Menu.Menu position="right">
          <Menu.Item as="a" name="IoI">
            POI
          </Menu.Item>

          <Menu.Item as="a" name="Logout">
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MainMenu;