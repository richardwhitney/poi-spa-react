import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

class WelcomeMenu extends Component {

  render() {

    return (
      <Menu inverted>
        <Menu.Menu position="left">
          <Menu.Item as="a" name="home">
            POI
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item as="a" name="login">
            Login
          </Menu.Item>

          <Menu.Item as="a" name="signup">
            Signup
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default WelcomeMenu;