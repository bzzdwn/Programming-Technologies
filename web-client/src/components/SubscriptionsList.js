import React, {useState, useEffect} from "react";
import SubscriptionsItem from "./SubscriptionsItem";
import axios from 'axios';
import { Alert } from "react-bootstrap";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

function SubscriptionsList ({id}) {
    const[cards, setCard] = useState([]);

    useEffect(() => {
        console.log(id)
        client.get("/api/sportcenterapp/subscription/" + id)
        .then(res => {
            setCard(res.data)
            console.log(res.data)
        })
        .catch(err=> console.log(err))
      }, []);

      if(cards.length === 0){
            return (<Alert variant="danger">В данный момент у Вас нет абонементов.</Alert>)
      }
      else {
      return (
        <>
        {cards && cards.map((cards)=><SubscriptionsItem cards={cards}/>)}
        </>
      )
      }
        
}

export default SubscriptionsList;