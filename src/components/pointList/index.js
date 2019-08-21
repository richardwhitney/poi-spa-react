import React, { Component, Fragment } from 'react';
import { Header } from "semantic-ui-react";
import Point from '../point/';

class PointList extends Component {

  render() {
    const pointsList = this.props.points.map(p => (
      <Point key={p._id} point={p} />
    ));
    return (
      <Fragment>
        <Header as="h3">Explore Islands of Ireland</Header>
        {pointsList}
      </Fragment>
    )
  }
}

export default PointList;