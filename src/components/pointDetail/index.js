import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../dataStore/stubApi';
import {Grid, Image, Segment, Header, Container, Button} from 'semantic-ui-react'
import loginImg from "../../images/poi2.jpg";

class PointDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const point = api.getPoint(id);
    return (
      <Fragment>
        <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Segment raised>
                  <Image src={point.imageUrl} size="large" rounded centered/>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment raised clearing>
                  <Header as="h3">{point.name}</Header>
                  <Header as="h4">Description</Header>
                  <p>{point.description}</p>
                  <Container>
                    <Button color="blue" floated="left">Update</Button>
                    <Button color="red" floated="right">Delete</Button>
                  </Container>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Fragment>
    );
  }
}

export default withRouter(PointDetail);