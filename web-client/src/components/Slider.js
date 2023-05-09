import React from "react";
import { Carousel } from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import fitness from "./fitness.jpg"
import aerobic from "./aerobic.jpg"
import stretching from "./stretching.jpg"
import pilatess from "./pilatess.jpg"
import batoot from "./batoot.jpg"
import joga from "./joga.jpg"
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
                src={fitness}
                alt="First Slide">
                </img>
                <Carousel.Caption>
                    <h3>Фитнес</h3>
                    <p>Занятия фитнесом. Отличные.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={aerobic}
                alt="Second Slide">
                </img>
                <Carousel.Caption>
                    <h3>Аэробика</h3>
                    <p>Превосходные тренировки по аэробике.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={stretching}
                alt="Third Slide">
                </img>
                <Carousel.Caption>
                    <h3>Стретчинг</h3>
                    <p>Сногсшибательные и суставоразрывательные растяжки на стретчинге.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={pilatess}
                alt="Fourth Slide">
                </img>
                <Carousel.Caption>
                    <h3>Пилатес</h3>
                    <p>Пилатэс.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={joga}
                alt="Fifth Slide">
                </img>
                <Carousel.Caption>
                    <h3>Йога</h3>
                    <p>Медитация и прочее.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={batoot}
                alt="Sixth Slide">
                </img>
                <Carousel.Caption>
                    <h3>Батуты</h3>
                    <p>Попрыгунчик потерялся...</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '550px'}}>
                <img className="d-block w-100"
                src={img3}
                alt="Seventh Slide">
                </img>
                <Carousel.Caption>
                    <h3 >Тренажерный зал</h3>
                    <p>Конкретная такая качалочка для мужчин</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Styles>
        
    )
}