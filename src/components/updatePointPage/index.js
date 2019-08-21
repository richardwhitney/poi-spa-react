import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {Segment, Grid, Image} from "semantic-ui-react";
import singupImg from '../../images/poi2.jpg'
import UpdatePointForm from "../updatePointForm";
import api from "../../dataStore/stubApi";

class UpdatePointPage extends Component {

  async componentDidMount() {
    const {id} = this.props.match.params;
    await this.props.handleGetPoint(id);
  }

  render() {
    if (this.props.point !== null) {
      return (
        <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <UpdatePointForm
                  handleUpdatePoint={this.props.handleUpdatePoint}
                  options={this.props.options}
                  point={this.props.point}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={this.props.point.imageUrl} size="medium"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      )
    } else {
      return <div>Loading</div>
    }
  }

}

export default withRouter(UpdatePointPage);