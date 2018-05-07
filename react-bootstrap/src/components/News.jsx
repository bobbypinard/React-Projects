import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import './News.css'

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/taylor-ultrawide.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nibh at leo egestas fringilla. Curabitur et magna risus. Nunc tempor ipsum libero, sit amet facilisis augue bibendum nec. Aenean ac metus sagittis, euismod justo vitae, consequat tortor. Vestibulum porta enim sed venenatis auctor. Vivamus tincidunt egestas dolor. Duis dignissim malesuada magna non condimentum. Phasellus massa dolor, faucibus eget urna non, pellentesque ultricies velit. Duis id est velit. Donec nec lacinia risus. Curabitur accumsan orci quis libero fringilla tempor. Mauris odio urna, sollicitudin ut ullamcorper eget, aliquam a lorem. Curabitur sed hendrerit orci. Pellentesque blandit mattis imperdiet. Morbi in efficitur est, sit amet aliquam nisl.</p>
              <p>Morbi sit amet mauris vestibulum, porttitor ante non, ornare turpis. Suspendisse non lacus ac sem iaculis pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut efficitur auctor neque ut malesuada. Nullam commodo nulla eget diam tincidunt, sed pretium nibh efficitur. Morbi sapien nunc, sodales eget feugiat ac, porttitor sed ipsum. Nulla nec magna a velit hendrerit tristique. Vestibulum vehicula ligula et vehicula feugiat. Curabitur ornare neque vehicula nunc ultricies, sit amet malesuada felis suscipit. Integer rutrum risus non enim sollicitudin maximus. Phasellus malesuada justo dolor, non fringilla libero efficitur in. Vestibulum congue velit ac ipsum gravida mattis. Fusce lacus leo, ultricies ut velit eu, lacinia imperdiet orci.</p>
              <p>Aliquam in nibh scelerisque, tincidunt tortor eu, commodo lorem. Aliquam est nibh, malesuada id ullamcorper vitae, ornare vitae velit. Nunc nec tempor justo. Curabitur vel lectus in quam aliquet tincidunt in nec lectus. Nulla interdum orci arcu. Sed euismod non mi sed ultrices. Duis et fermentum felis. Nunc sollicitudin lorem odio, et tincidunt mi aliquet vitae. Sed sit amet tempus massa.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/taylor-sidebar.jpg" />
              <p>Red is such an interesting color to correlate with emotion, because it's on both ends of the spectrum. On one end you have happiness, falling in love, infatuation with someone, passion, all that. On the other end, you've got obsession, jealousy, danger, fear, anger and frustration.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
