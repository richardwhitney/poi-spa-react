import React, { Component, Fragment } from 'react';
import { Header } from "semantic-ui-react";
import Point from '../point/';
import api from '../../dataStore/stubApi';

class PointList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const points = await api.getPoints();
    this.setState({
      data: points
    });
  }

  render() {
    if (this.state.data !== null) {
      const pointList = this.state.data.map(p => (
        <Point key={p._id} point={p} />
      ));
      return (
        <Fragment>
          <Header as="h3">Explore Islands of Ireland</Header>
          {pointList}
        </Fragment>
      )
    } else {
      return (
        <div>Loading</div>
      );
    }
  }
}

export default PointList;