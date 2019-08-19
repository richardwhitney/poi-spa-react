import React, {Component, Fragment} from 'react';
import Dashboard from './components/dashboard';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Dashboard handleAddPointLocal={this.props.handleAddPointLocal} options={this.props.options}/>
      </Fragment>
    );
  }
}

export default App;
