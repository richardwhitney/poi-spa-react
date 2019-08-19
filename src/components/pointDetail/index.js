import React, {Component, Fragment} from 'react';
import { withRouter, Link } from 'react-router-dom';
import api from '../../dataStore/stubApi';
import {Grid, Image, Segment, Header, Container, Button} from 'semantic-ui-react'

class PointDetail extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false,
      data: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const {id} = this.props.match.params;
    const point = await api.getPoint(id);
    this.setState({
      data: point
    });
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
    if (this.state.data !== null) {
      return (
        <Fragment>
          <Segment>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Segment raised>
                    <Image src={this.state.data.imageUrl} size="large" rounded centered/>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment raised clearing>
                    <Header as="h3">{this.state.data.name}</Header>
                    <Header as="h4">Description</Header>
                    <p>{this.state.data.description}</p>
                    <Container>
                      <Link
                        to={`/updatepoint/${this.state.data._id}`}
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
    } else {
      return (
        <div>
          Loading
        </div>
      )
    }

  }
}

export default withRouter(PointDetail);