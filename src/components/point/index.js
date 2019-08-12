import React, { Component } from 'react';
import { Segment, Table, Container, Button, Icon } from "semantic-ui-react";

class Point extends Component {
  render() {
    return (
      <Segment raised>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Added By</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Cell>
              Test
            </Table.Cell>
            <Table.Cell>
              Test User
            </Table.Cell>
          </Table.Body>
        </Table>
        <Container>
          <Button color="blue">View<Icon className="chevron right" /></Button>
        </Container>
      </Segment>
    )
  }
}

export default Point;
