import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import {getJwt} from "../../utils/jwt";
import axios from 'axios';

class Authenticate extends Component {
  constructor() {
    super();
    this.state = {
      user: undefined
    }
  }

  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push('/');
    }
    axios.get('http://localhost:3002/api/users/current', { headers: {Authorization: `Bearer ${jwt}`} })
      .then(res => this.setState({
        user: res.data
      })).catch(err => {
        localStorage.removeItem('poi-jwt');
        this.props.history.push('/')
    });
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <Segment>
          <Dimmer active>
            <Loader/>
          </Dimmer>
          <Fragment>{this.props.children}</Fragment>
        </Segment>
      )
    }
    return (
      <Fragment>{this.props.children}</Fragment>
    )
  }
}

export default withRouter(Authenticate);