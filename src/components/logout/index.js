import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Logout extends Component {

  componentDidMount() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default withRouter(Logout);