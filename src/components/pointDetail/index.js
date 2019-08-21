import React, {Component, Fragment} from 'react';
import { withRouter, Link } from 'react-router-dom';
import {Grid, Image, Segment, Header, Container, Button} from 'semantic-ui-react'

class PointDetail extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this);
  }


  async componentDidMount() {
    console.log("Point detail mounted");
    const {id} = this.props.match.params;
    await this.props.handleGetPoint(id);
  }

  async handleDelete(event) {
    event.preventDefault();
    const {id} = this.props.match.params;
    await this.props.handleDeletePoint(id);
    let path = '/dashboard';
    this.props.history.push(path);
  }

  render() {
    if (this.props.point != null) {
      return (
        <Fragment>
          <Segment>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Segment raised>
                    <Image src={this.props.point.imageUrl}
                           size="large"
                           rounded
                           centered
                    />
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment raised clearing>
                    <Header as="h3">{this.props.point.name}</Header>
                    <Header as="h4">Description</Header>
                    <p>{this.props.point.description}</p>
                    <Container>
                      <Link
                        to={`/updatepoint/${this.props.point._id}`}
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
        <div>Loading</div>
      )
    }
  }
}

export default withRouter(PointDetail);