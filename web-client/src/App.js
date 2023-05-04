import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap'
import NavigationBar from './components/NavigationBar';
import {Coaches} from './Coaches'
import {Home} from './Home'
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router><NavigationBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/coaches" element={<Coaches/>}/>
    </Routes>
    </Router>
    </>
    )
}

export default App;