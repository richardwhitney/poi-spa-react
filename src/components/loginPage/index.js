import React, {Component, Fragment} from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'
import LoginForm from "../loginForm";
import loginImg from '../../images/poi2.jpg'

class LoginPage extends Component {
  render() {
    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Image src={loginImg} size="medium"/>
            </Grid.Column>
            <Grid.Column>
              <LoginForm/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}
export default LoginPage;