import React, {useEffect, useState}  from "react";
import {Container, Table} from 'react-bootstrap';
import { TransferToProfile } from "./TransferToProfile";
import axios from 'axios';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

export function ProfilePage ({token}) {
    
    const[currentId, setCurrentId] = useState(null);

    const config = {
        headers:{
            'Authorization': 'Token ' + token
        }
    }
    useEffect(() => {
        client.get('/api/auth/users/me', config
        )
        .then(res => {
            setCurrentId(res.data.id);
        })
      }, []);

      if(!currentId) return null;

    return(
            <TransferToProfile currentId={currentId}/>
    )
    
}
