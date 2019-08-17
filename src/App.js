import React, {Component, Fragment} from 'react';
import './App.css';
import SideBar from './components/sidebar/';
import Dashboard from './components/dashboard';
import api from './dataStore/stubApi';
import _ from 'lodash';

class App extends Component {
  addPoint = (name, description, category) => {
    api.addPoint(name, description, category);
    this.setState({});
  };

  render() {
    let points = api.getPoints();
    return (
      <Dashboard handleAddPoint={this.addPoint} points={points} options={this.props.options}/>
    );
  }
}

export default App;
