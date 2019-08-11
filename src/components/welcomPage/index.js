import React, {Component, Fragment} from 'react';
import { Grid, Image, Segment, Header } from 'semantic-ui-react'
import welcomeImg from '../../images/poi.jpg'

class WelcomePage extends Component {
  render() {
    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Image src={welcomeImg} size="medium"/>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3">Explore Points of Interest</Header>
              <p>Work in progress</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default WelcomePage;