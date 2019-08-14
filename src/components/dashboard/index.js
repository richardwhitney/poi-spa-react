import React, {Component, Fragment} from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'
import PointList from '../pointList/';
import PointForm from '../pointForm/';


class Dashboard extends Component{

  render() {
    const sample = {
      name: "Test Point",
      addedBy: "Test User"
    };

    const options = [
      { key: 't', text: 'Test', value: 'test'},
      { key: 'n', text: 'North', value: 'north'},
      { key: 'e', text: 'East', value: 'east'},
      { key: 'w', text: 'West', value: 'west'},
      { key: 's', text: 'South', value: 'south'}
    ]

    const points = [sample, sample, sample];

    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <PointForm options={options}/>
            </Grid.Column>
            <Grid.Column>
              <PointList points={points}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Dashboard;