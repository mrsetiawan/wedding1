import React, { Component } from 'react'
import { Link as Target, Element, animateScroll as scroll } from 'react-scroll'
import image1 from '../src/components/assets/slide1.jpg'
import image2 from '../src/components/assets/slide2.jpg'
import image3 from '../src/components/assets/slide3.jpg'
import image4 from '../src/components/assets/slide4.jpg'
import first from '../src/components/assets/first.png'
import middle from '../src/components/assets/middle.png'
import last from '../src/components/assets/last.png'
import {
  Container,
  Carousel,
  Col,
  Row,
  Navbar
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  scrollBottom = () => scroll.scrollToBottom()

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" className='sticky-top'>
          <Container>
            <Col>
              <ul className='nav-list'>
                <li className='nav-item'><Target activeClass="active" to="test1" spy={true} smooth={true} offset={0} duration={600} >CEREMONY</Target></li>
                <li className='nav-item'><Target activeClass="active" to="test2" spy={true} smooth={true} offset={0} duration={600} >RECEPTION</Target></li>
                <li className='nav-item'><Target activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={600} >AFTERPARTY</Target></li>
                <li className='nav-item'><Target activeClass="active" to="brand" spy={true} smooth={true} offset={0} duration={600} ><span className='brand'><b>Rahmat & Indah</b></span></Target></li>
                <li className='nav-item'><Target activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={600} >ACCOMODATION</Target></li>
                <li className='nav-item'><Target activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={600} >REGISTRY</Target></li>
                <li className='nav-item'><Target activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={600} >RSVP</Target></li>
              </ul>
            </Col>
          </Container>
        </Navbar>
        <Element name='brand' style={{ width: '100%' }}>
          <Carousel>
            <Carousel.Item>
              <div className='layer'>
                <img src={image1} alt='1'/>
              </div>
              <Carousel.Caption>
                <h3>We're engaged!</h3>
                <p>Insyaallah November 2020 Nikah</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={image2} alt='2'/>
              <Carousel.Caption>
                <h3>We're engaged!</h3>
                <p>Insyaallah November 2020 Nikah</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={image3} alt='3'/>
              <Carousel.Caption>
                <h3>We're engaged!</h3>
                <p>Insyaallah November 2020 Nikah</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Element>
        <Row>
          <Element name='test1' style={{ width: '100%' }}>
            <Col xs={12} className='element-child'>
              <img src={first} alt="first img" />
              <h3><b>The Ceremony</b></h3>
              <p className='text-secondary'>4:00 PM</p>
              <p> Grace Church </p>
              <p> 37 Bear Blvd</p>
              <p>Flagstaff, AZ 86001</p>
            </Col>
          </Element>

          <Element name='test2' style={{ width: '100%' }}>
            <Col xs={12} className='element-child' style={{ backgroundColor: '#E9967A' }}>
              <img src={middle} alt="first img" />
              <h3><b>The Ceremony</b></h3>
              <p className='text-secondary'>4:00 PM</p>
              <p> Grace Church </p>
              <p> 37 Bear Blvd</p>
              <p>Flagstaff, AZ 86001</p>
            </Col>
          </Element>

          <Element name='test3' style={{ width: '100%' }}>
            <Col xs={12} className='element-child'>
              <img src={last} alt="first img" />
              <h3><b>The Ceremony</b></h3>
              <p className='text-secondary'>4:00 PM</p>
              <p> Grace Church </p>
              <p> 37 Bear Blvd</p>
              <p>Flagstaff, AZ 86001</p>
            </Col>
          </Element>
        </Row>
        <Col xs={12} className='element-child text-center' style={{ backgroundColor: 'rgb(133, 183, 180 )' }}>
          template by @muhamadrahmatsetiawan
          </Col>
      </div>
    )
  }
}
