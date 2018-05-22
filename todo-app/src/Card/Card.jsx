import React, { Component } from 'react'
import { Button, Panel } from 'react-bootstrap'
import './Card.css'

export default class Card extends Component {
  render() {
    return (
      <div>
        <Panel bsStyle="success">
          <Panel.Heading>Head</Panel.Heading>
          <Panel.Body>Body</Panel.Body>
        </Panel>
        <Button bsStyle="success">Success</Button>
      </div>
    )
  }
}