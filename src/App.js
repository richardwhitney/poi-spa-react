import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './components/examples/btn';
import MainMenu from './components/mainmenu/';
import SideBar from './components/sidebar/';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainMenu/>
        <SideBar/>
      </Fragment>
    );
  }
}

export default App;
