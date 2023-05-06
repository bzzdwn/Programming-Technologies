import React from "react";
import Slider from "./components/Slider";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import Jumbotron from "./components/Jumbotron";
import img3 from "./components/img3.jpg"

export const Home = () => (
    <>
        <Slider></Slider>
        <br/>
        <Container style={{marginBottom: '30px' }}>
            <Row>
                <Col md = {7}>
                    <img src={img3} height={370} width={600} />
                </Col>
                <Col md={5}>
                    <h2>Спортивный Центр</h2>
                    <p>
                    Занятия могут быть групповые и индивидуальные, а также для детей, взрослых или семейные. Спортивные
                    направления: фитнес, аэробика, стрейчинг, пилатес, батуты, бассейн, тренажерный зал, йога, так
                    же могут добавляться новые направления. Посетитель может купить абонемент (4, 6, 8, 12
                    занятий, безлимит занятий) на 30 дней или разовое занятие. Абонемент можно «заморозить» на
                    10 дней , если есть справка по болезни - на количество дней по справке.
                    </p>
                </Col>
            </Row>
        </Container>
    </>
)