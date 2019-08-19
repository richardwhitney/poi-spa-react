import React, {Component, Fragment} from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'
import PointList from '../pointList/';
import PointForm from '../pointForm/';


class Dashboard extends Component{

  render() {

    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <PointForm options={this.props.options} handleAddPointLocal={this.props.handleAddPointLocal}/>
            </Grid.Column>
            <Grid.Column>
              <PointList/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Dashboard;