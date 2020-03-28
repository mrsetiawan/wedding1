import React, { Component } from 'react'
import { Link as Link, Element, animateScroll as scroll } from 'react-scroll'
import MyNavbar from './components/ui/MyNavbar'
import image1 from '../src/components/assets/slide1.jpg'
import first from '../src/components/assets/first.png'
import middle from '../src/components/assets/middle.png'
import last from '../src/components/assets/last.png'
import {
  Carousel,
  Container,
  Col,
  Row,
  Navbar
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  scrollBottom = () => scroll.scrollToBottom()

  render() {
    return (
      <div>
        <Navbar sticky="bottom">
          <ul>
            <li><Link activeClass="active" to="firstElement" spy={true} smooth={true} offset={50}></Link><p onClick={this.scrollBottom}>tes 1</p></li>
            <li>tes 1</li>
            <li>tes 1</li>
            <li>tes 1</li>
          </ul>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img
              className="banner-image"
              src={image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="banner-image"
              src={image1}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="banner-image"
              src={image1}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Row>
          <Element name='firstElement'>
            <Col xs={12} className='element-child text-center'>
              <img src={first} alt="first img" />
              <h3><b>The Ceremony</b></h3>
              <p className='text-secondary'>4:00 PM</p>
              <p> Grace Church </p>
              <p> 37 Bear Blvd</p>
              <p>Flagstaff, AZ 86001</p>
            </Col>
          </Element>
          <Col xs={12} className='element-child text-center' style={{ backgroundColor: '#E9967A' }}>
            <img src={middle} alt="first img" />
            <h3><b>The Ceremony</b></h3>
            <p className='text-secondary'>4:00 PM</p>
            <p> Grace Church </p>
            <p> 37 Bear Blvd</p>
            <p>Flagstaff, AZ 86001</p>
          </Col>
          <Col xs={12} className='element-child text-center'>
            <img src={last} alt="first img" />
            <h3><b>The Ceremony</b></h3>
            <p className='text-secondary'>4:00 PM</p>
            <p> Grace Church </p>
            <p> 37 Bear Blvd</p>
            <p>Flagstaff, AZ 86001</p>
          </Col>
          <Col xs={12} className='element-child text-center' style={{ backgroundColor: 'rgb(133, 183, 180 )' }}>
            Footer
          </Col>
        </Row>
      </div>
    )
  }
}
