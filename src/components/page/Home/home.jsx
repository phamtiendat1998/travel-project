import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap/'
import CarouselContainer from './../../layouts/carousel/carouselContainer'


export default class home extends Component {
  render() {
    return (
      <Row id="home">
        <Col md={9} className="home--carousel">
          <CarouselContainer />
        </Col>

        <Col md={3} className="home--sideBar">
        </Col>
      </Row>
    )
  }
}
