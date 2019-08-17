import React, {Component, Fragment} from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'
import PointList from '../pointList/';
import PointForm from '../pointForm/';
import categoryData from '../.././dataStore/categoryData';


class Dashboard extends Component{

  render() {

    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <PointForm options={this.props.options} handleAddPoint={this.props.handleAddPoint}/>
            </Grid.Column>
            <Grid.Column>
              <PointList points={this.props.points}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Dashboard;