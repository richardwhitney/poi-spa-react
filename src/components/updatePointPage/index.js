import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {Button, Form, Header, Message, Segment, TextArea, Select, Grid, Image} from "semantic-ui-react";
import singupImg from '../../images/poi2.jpg'
import UpdatePointForm from "../updatePointForm";
import api from "../../dataStore/stubApi";

class UpdatePointPage extends Component {

  render() {
    const { id } = this.props.match.params;
    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <UpdatePointForm
                handleUpdatePoint={this.props.handleUpdatePoint}
                options={this.props.options}
                id={id}/>
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

export default withRouter(UpdatePointPage);