import React, {Component, Fragment} from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'
import SignupForm from "../signupForm";
import singupImg from '../../images/poi2.jpg'
import LoginForm from "../loginPage";

class SignupPage extends Component {
  render() {
    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <SignupForm/>
            </Grid.Column>
            <Grid.Column>
              <Image src={singupImg} size="medium"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default SignupPage;