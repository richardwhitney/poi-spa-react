import React, {Component, Fragment} from 'react';
import { Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MainMenu extends Component {

  render() {

    return (
      <Menu inverted >
        <Menu.Menu position="right">
          <Link to="/dashboard">
            <Menu.Item name="IoI">
              POI
            </Menu.Item>
          </Link>
          <Link to="/logout"  onClick={this.props.handleLogout}>
            <Menu.Item name="Logout">
              Logout
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MainMenu;