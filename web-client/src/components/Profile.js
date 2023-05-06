import React from "react";
import { Offcanvas, Row, Col, Form } from "react-bootstrap";


export const Profile = ({person}) => (
    <>
    <Offcanvas.Header closeButton>
          <Offcanvas.Title>Мой профиль</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          ФИО
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly placeholder={person.name} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Адрес
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly placeholder={person.address} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Телефон
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly placeholder={person.phone} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly placeholder={person.email} />
        </Col>
      </Form.Group>
        </Offcanvas.Body>
    </>
)
