import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './components/examples/btn';
import MainMenu from './components/mainmenu/';
import SideBar from './components/sidebar/';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainMenu/>
        <Dashboard/>
      </Fragment>
    );
  }
}

export default App;
