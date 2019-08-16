import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Table, Container, Button, Icon } from "semantic-ui-react";

class Point extends Component {
  render() {
    return (
      <Segment raised clearing>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Added By</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {this.props.point.name}
              </Table.Cell>
              <Table.Cell>
                {this.props.point.addedBy}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Container>
          <Link
            to={`/poi/${this.props.point._id}`}
            >
            <Button color="blue" floated="right">View<Icon className="chevron right" /></Button>
          </Link>
        </Container>
      </Segment>
    )
  }
}

export default Point;
