import React, {useState, useEffect} from "react";
import { Card, ListGroup, Container, Col, Row } from "react-bootstrap";
import axios from 'axios';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

function SubscriptionItemCoach({coach}) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        client.get('/api/sportcenterapp/details/coach/' + coach)
        .then(res => {
          setName(res.data.name);
          setPhone(res.data.phone);
        })
      }, );
    if (coach == null){
        return (
            <>
            </>
        )
    } else {
    return(
        <ListGroup.Item>Тренер: {name}</ListGroup.Item>
        
    )
    }
}

export default SubscriptionItemCoach;