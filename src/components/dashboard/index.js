import React, {Component, Fragment} from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'
import PointList from '../pointList/';
import PointForm from '../pointForm/';
import pointData from '../.././dataStore/pointData'
import categoryData from '../.././dataStore/categoryData';


class Dashboard extends Component{

  render() {
    const points = pointData;

    const categories = categoryData.map(category => {
      return {key: category._id, text: category.name, value: category.name.toLocaleLowerCase()};
    });

    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <PointForm options={categories}/>
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