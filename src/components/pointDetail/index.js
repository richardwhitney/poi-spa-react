import React, {Component, Fragment} from 'react';
import { withRouter, Link } from 'react-router-dom';
import api from '../../dataStore/stubApi';
import {Grid, Image, Segment, Header, Container, Button} from 'semantic-ui-react'

class PointDetail extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    const {id} = this.props.match.params;
    let path = '/';
    this.props.history.push(path);
    console.log(`Point id: ${id}`);
    this.props.handleDeletePoint(id);
  }

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
                    <Link
                      to={`/updatepoint/${point._id}`}
                      >
                      <Button color="blue" floated="left">Update</Button>
                    </Link>
                    <Button color="red" floated="right" onClick={this.handleDelete}>Delete</Button>
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