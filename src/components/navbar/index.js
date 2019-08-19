import React, { Component } from 'react'
import MainMenu from './mainmenu';
import WelcomeMenu from './welcomemenu';
class Navbar extends Component {

  render() {
    if (this.props.user) {
      return (
        <MainMenu user={this.props.user}/>
      )
    }
    return (
      <WelcomeMenu/>
      )
  }
}

export default Navbar;