import React, {useEffect, useState}  from "react";
import {Container, Table} from 'react-bootstrap';
import CoachesList from "./components/CoachesList";
import axios from 'axios';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

export function Coaches () {

    const[persons, setPerson] = useState([]);
    
    useEffect(() => {
      client.get('/api/sportcenterapp/show/coach/')
      .then(res => setPerson(res.data))
      .catch(err=> console.log(err))
    }, []);

    return(
<Container>
        <Table striped bordered hover responsive>
        <thead>
            <tr> 
                <th scope="col">#</th>
                <th scope="col">ФИО тренера</th>
                <th scope="col">Должность</th>
                <th scope="col">Специализация</th>
                <th scope="col"> Номер телефона</th>
            </tr>
        </thead>
        <tbody>
            <CoachesList persons={persons}/>
        </tbody>
        </Table>
    </Container>
    )
    
}
