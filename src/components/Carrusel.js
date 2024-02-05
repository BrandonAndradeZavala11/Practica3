import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import ft1 from '../imgs/1.jpg';
import ft2 from '../imgs/2.jpg';
import ft3 from '../imgs/3.jpg';
import ft4 from '../imgs/4.jpg';
import '../Carrusel.css'
const Carrusel = () => {
  return (
    <div>
        <Carousel>
            <Carousel.Item className='carousel'>
                <img src={ft1}></img>
            </Carousel.Item>
            
            <Carousel.Item className='carousel'>
                <img  src={ft2}></img>
            </Carousel.Item>

            <Carousel.Item className='carousel'>
                <img  src={ft3}></img>
            </Carousel.Item>

            <Carousel.Item className='carousel'>
                <img  src={ft4}></img>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Carrusel