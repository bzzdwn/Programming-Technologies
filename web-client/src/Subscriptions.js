import React, {useState, useEffect} from "react";
import { Card, ListGroup, Container, Col, Row, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import SubscriptionsList from "./components/SubscriptionsList";
import axios from 'axios';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

export function Subscriptions () {
    const[id, setId] = useState(0);
    
    const config = {
        headers:{
            'Authorization': 'Token ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
        client.get('/api/auth/users/me', config
        )
        .then(res => {
          setId(res.data.id);
          localStorage.setItem('id', res.data.id)
          console.log(localStorage.getItem('id'))
        })
      }, []);


    return(
        <>
    <Container>
    <h1>Мои абонементы</h1>
    <Row>
    <SubscriptionsList id={localStorage.getItem('id')}/>
    </Row>
    <br/>
    <Button variant="dark" href="/buying">
        Купить абонемент
    </Button>
    </Container>
    <br/>
    </>
    )
}