import React from "react";
import { Carousel } from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import styled from 'styled-components';

const Styles = styled.div`
    a, .carousel{
        color: #adb1b8;
        &:hover {
            color:white
        }
        font-family: Georgia, serif
    }
`

export default function Slider() {
    return (
        <Styles>
            <Carousel variant="primary">
            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={img1}
                alt="First Slide">
                </img>
                <Carousel.Caption>
                    <h3>SportCenter</h3>
                    <p>info</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={img2}
                alt="Second Slide">
                </img>
                <Carousel.Caption>
                    <h3>SportCenter</h3>
                    <p>info</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={img3}
                alt="Third Slide">
                </img>
                <Carousel.Caption>
                    <h3 >SportCenter</h3>
                    <p>info</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Styles>
        
    )
}