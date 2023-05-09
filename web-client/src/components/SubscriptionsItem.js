import React from "react";
import { Card, ListGroup, Container, Col, Row } from "react-bootstrap";
import img from "./subscript.png"
import SubscriptionItemCoach from "./SubscriptionItemCoach";

const SubscriptionsItem = ({cards}) => (
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{cards.type}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Был куплен: {cards.buying_date}</ListGroup.Item>
        <ListGroup.Item>Истекает: {cards.expiration_date}</ListGroup.Item>
        <ListGroup.Item>количество занятий: {cards.visits}</ListGroup.Item>
        <ListGroup.Item>Тип (по количеству человек): {cards.people}</ListGroup.Item>
        <ListGroup.Item>Тип (по возрасту): {cards.age}</ListGroup.Item>
        <SubscriptionItemCoach coach={cards.coach}/>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Заморозить</Card.Link>
        <Card.Link href="#">Продлить</Card.Link>
      </Card.Body>
    </Card>
    </Col> 
)

export default SubscriptionsItem;