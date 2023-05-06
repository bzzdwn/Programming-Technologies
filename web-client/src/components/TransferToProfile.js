import React, {useEffect, useState}  from "react";
import { Profile } from "./Profile";
import axios from 'axios';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

export function TransferToProfile ({currentId}) {

    const[person, setPerson] = useState(null);
    useEffect(() => {
      client.get('/api/sportcenterapp/details/visitor/' + currentId)
      .then(res => {
        setPerson(res.data)
      })
      .catch(err=> console.log(err))
    }, []);

    if (person == null) return null;

    return(
        <Profile person={person}/>
        
    )
    
}
