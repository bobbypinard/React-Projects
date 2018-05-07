import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>This is my React Bootstrap app.</h2>
          <p>In here, I will create a full website with React, React Router and React Bootstrap.</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="personWrapper">
            <Image src="assets/taylor1.jpg" circle className="profile-pic" />
            <h3>Taylor</h3>
            <p>This is Taylor.</p>
          </Col>
          <Col xs={12} sm={4} className="personWrapper">
            <Image src="assets/taylor2.jpg" circle className="profile-pic" />
            <h3>Taylor</h3>
            <p>This is also Taylor.</p>
          </Col>
          <Col xs={12} sm={4} className="personWrapper">
            <Image src="assets/taylor3.jpg" circle className="profile-pic" />
            <h3>Taylor</h3>
            <p>If you have Taylor 2 times, you gotta have her a third.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
