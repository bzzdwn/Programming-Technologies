import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap'
import NavigationBar from './components/NavigationBar';
import {Coaches} from './Coaches'
import {Home} from './Home'
import { Subscriptions } from './Subscriptions';
import {Buying} from './Buying';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router><NavigationBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/coaches" element={<Coaches/>}/>
      <Route path="/subscriptions" element={<Subscriptions/>}/>
      <Route path="/buying" element={<Buying/>}/>
    </Routes>
    </Router>
    <Footer/>
    </>
    )
}

export default App;