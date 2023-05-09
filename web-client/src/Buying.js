import React, {useState, useEffect} from "react";
import { Card, ListGroup, Container, Col, Row, Button, Form } from "react-bootstrap";
import SubscriptionsList from "./components/SubscriptionsList";
import axios from 'axios';
import { Navigate } from "react-router-dom";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

export function Buying () {
    const[id, setId] = useState(0);
    const[type, setType] = useState('');
    const[people, setPeople] = useState('');
    const[age, setAge] = useState('');
    const[visits, setVisits] = useState('');
    
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

    function submitForm(e) {
        e.preventDefault();
        var today = new Date();
 
        var bdate = today.getFullYear() +'-'+ (today.getMonth() + 1) + '-' + today.getDate();

        var edate = today.getFullYear() +'-'+ (today.getMonth() + 2) + '-' + today.getDate();
        client.post(
            "/api/sportcenterapp/create/subscription/",
            {
                visitor: [id],
                freeze: false,
                freeze_days: null,
                price: 50,
                buying_date: bdate,
                expiration_date: edate,
                type: type,
                people: people,
                age: age,
                visits: visits,
                coach: null
            }
          ).then(res => {
            alert(`успешно`)
          }).catch(err => {
            alert(`ошибка: не все параметры выбраны`)
          });

    }

    return(
    <>
        <br/>
        <Container>
        <Form onSubmit={e => submitForm(e)}>
            <Form.Label>
                Выберите тип занятий:
            </Form.Label>
            <Form.Control as="select" aria-label="PeopNum" value={people} onChange={e => setPeople(e.target.value)}>
                <option>Выберите...</option>
                <option value="индивидуальный">Индивидуальные занятия</option>
                <option value="групповой">Групповые занятия</option>
            </Form.Control>
            <br/>
            <Form.Control as="select" aria-label="Age" value={age} onChange={e => setAge(e.target.value)}>
                <option>Выберите...</option>
                <option value="детский">Занятия для детей</option>
                <option value="взрослый">Занятия для взрослых</option>
                <option value="семейный">Занятия семейные</option>
            </Form.Control>
            <hr/>
            <Form.Label>
                Выберите направление занятий:
            </Form.Label>
            <Form.Control as="select" aria-label="Activity" value={type} onChange={e => setType(e.target.value)}>
            <option>Выберите...</option>
                <option value="фитнес">Фитнес</option>
                <option value="аэробика">Аэробика</option>
                <option value="стретчинг">Стретчинг</option>
                <option value="пилатес">Пилатес</option>
                <option value="батуты">Батуты</option>
                <option value="бассейн">Бассейн</option>
                <option value="тренажерный заь">Тренажерный зал</option>
                <option value="йога">Йога</option>
            </Form.Control>
            <hr/>
            <Form.Label>
                Выберите количество занятий:
            </Form.Label>
            <Form.Control as="select" aria-label="Visits" value={visits} onChange={e => setVisits(e.target.value)}>
            <option>Выберите...</option>
                <option value="4">4 занятия</option>
                <option value="6">6 занятий</option>
                <option value="8">8 занятий</option>
                <option value="12">12 занятий</option>
                <option value="безлимит">безлимит занятий</option>
            </Form.Control>
            
            <br/>
            <Form.Group>
                <Button variant="dark" type="submit">Перейти к оплате</Button>
            </Form.Group>
        </Form>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>    
        <br/>
    </>
    )
}