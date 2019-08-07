import React, {Component, Fragment} from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'
import LoginForm from "../loginForm";
import loginImg from '../../../public/poi2.jpg'
import WelcomeMenu from '../welcomemenu';

class LoginPage extends Component {
  render() {
    return (
      <Fragment>
        <WelcomeMenu />
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
      </Fragment>
    )
  }
}
export default LoginPage;