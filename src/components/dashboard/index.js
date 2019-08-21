import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import PointList from '../pointList/';
import PointForm from '../pointForm/';

class Dashboard extends Component{

  render() {
    if (this.props.points != null && this.props.options != null) {
        const categories = this.props.options.map(category => {
          return {key: category._id, text: category.name, value: category.name.toLocaleLowerCase()};
        });

      return (
        <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <PointForm options={categories} handleAddPointLocal={this.props.handleAddPointLocal} handleAddPoint={this.props.handleAddPoint}/>
              </Grid.Column>
              <Grid.Column>
                <PointList points={this.props.points}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      )
    } else {
      return (
        <div>Loading..</div>
      )
    }
  }
}

export default Dashboard;