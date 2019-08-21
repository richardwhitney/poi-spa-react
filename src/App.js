import React, {Component, Fragment} from 'react';
import Dashboard from './components/dashboard';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Dashboard handleAddPointLocal={this.props.handleAddPointLocal} handleAddPoint={this.props.handleAddPoint} options={this.props.options} points={this.props.points}/>
      </Fragment>
    );
  }
}

export default App;
