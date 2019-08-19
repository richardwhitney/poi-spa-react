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
    return (
      <Fragment>
        <Dashboard handleAddPoint={this.addPoint} options={this.props.options}/>
      </Fragment>
    );
  }
}

export default App;
