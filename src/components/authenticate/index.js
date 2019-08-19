import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import {getJwt} from "../../utils/jwt";
import axios from 'axios';

class Authenticate extends Component {


  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push('/');
    }
    axios.get('http://localhost:3002/api/users/current', { headers: {Authorization: `Bearer ${jwt}`} })
      .then(res => this.props.handleAuth(res.data)).catch(err => {
        console.log(err);
        localStorage.removeItem('poi-jwt');
        this.props.history.push('/')
    });
  }

  render() {
    return (
      <Fragment>{this.props.children}</Fragment>
    )
  }
}

export default withRouter(Authenticate);