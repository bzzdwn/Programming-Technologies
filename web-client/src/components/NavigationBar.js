import React, {useState, useEffect} from "react";
import { Navbar, Nav, NavLink, Button, Container, Form, Modal, CloseButton, Offcanvas } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Profile } from "./Profile";
import { ProfilePage } from "./ProfilePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from 'axios';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link{
        color: #adb1b8;
        &:hover {
            color:white
        }
        font-family: Georgia, serif
    }
`

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

export default function NavigationBar() {

    const[token, setToken] = useState();

    const [showProfile, setShowProfile] = useState(false);
    const handleCloseProfile = () => setShowProfile(false);
    const handleShowProfile = () => setShowProfile(true);

    const [login_show, setLoginShow] = useState(false);
    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    const [register_show, setRegisterShow] = useState(false);
    const handleRegisterClose = () => setRegisterShow(false);
    const handleRegisterShow = () => setRegisterShow(true);

    const [confirm_show, setConfirmShow] = useState(false);
    const handleConfirmClose = () => setConfirmShow(false);
    const handleConfirmShow = () => setConfirmShow(true);

    const [currentUser, setCurrentUser] = useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    

    const [validated, setValidated] = useState(false);
  
    const [config, setConfig] = useState('');

  useEffect(() => {
      client.get('/api/auth/users/me', config
      )
      .then(res => {
        localStorage.setItem('id', res.data.id);
      })
    }, []);

  useEffect(() => {
    client.get("/api/auth/users/me/"
    , {
      headers:{
        'Authorization': 'Token ' + localStorage.getItem('token')
    }
    }
      )
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/api/auth/users/",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function(res){
      client.post(
        "/api/sportcenterapp/create/visitor/",
        {
          name: name,
          address: address,
          phone: phone,
          email: email
        })
    }).then(function(res) {
      client.post(
        "/api/auth_token/token/login",
        {
          username: username,
          password: password
        }
      ).then(function(res) {
        setCurrentUser(true);
        localStorage.clear();
      localStorage.setItem('token', res.data.auth_token);
      setToken(res.data.auth_token);
      });
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/api/auth_token/token/login",
      {
        username: username,
        password: password
      }
    ).then(function(res) {
      setCurrentUser(true);
      localStorage.clear();
      localStorage.setItem('token', res.data.auth_token);
      setToken(res.data.auth_token);
        client.get('/api/auth/users/me', {
          headers:{
              'Authorization': 'Token ' + localStorage.getItem('token')
          }
      }
        )
        .then(res => {
          localStorage.setItem('id', res.data.id);
        })
    }).catch(err => {
      alert(err.response.data.non_field_errors);
    });
  }


  function submitLogout(e) {
    e.preventDefault();
    console.log(localStorage.getItem('token'));
      localStorage.clear();
      setCurrentUser(false);
  }
  if(currentUser){
    return (
        <>
    <Styles>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>   
                <Navbar.Brand>Спортивный Центр</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'></Navbar.Collapse>
                <Nav className='me-auto'>
                    <Nav.Item>
                        <Nav.Link href="/">Главная</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/coaches">Список тренеров</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/subscriptions">Мои абонементы</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleShowProfile} className="me-2">Мой профиль</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Button onClick={submitLogout}  variant="outline-danger" className="me-2" type="submit">Выйти</Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </Styles>
    <Offcanvas show={showProfile} onHide={handleCloseProfile}>
      <ProfilePage token={localStorage.getItem('token')}/>
    </Offcanvas>
    </>
    )
  } else {

    function handleClick() {
      handleRegisterClose();
      handleConfirmShow();
    }

    return ( 
    <>
    <Styles>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>   
                <Navbar.Brand>Спортивный Центр</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'></Navbar.Collapse>
                <Nav className='me-auto'>
                    <Nav.Item>
                        <Nav.Link href="/">Главная</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/coaches">Список тренеров</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Button variant="outline-primary" className="me-2" onClick={handleLoginShow}>Войти</Button>{' '}
                        <Button variant="primary" className="signin-button" onClick={handleRegisterShow}>Зарегистрироваться</Button> {' '}
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </Styles>
    <Modal show={login_show} onHide={handleLoginClose}>
        <Modal.Header closeButton>
            <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={e => submitLogin(e)}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Введите логин"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Введите пароль"/>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Button variant="primary" type="submit">Войти</Button>
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    <Modal show={register_show} validated={validated} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
            <Modal.Title>Регистрация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={e => submitRegistration(e)}>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>
                        ФИО
                    </Form.Label>
                    <Form.Control required type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Введите ФИО"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>
                        Адрес
                    </Form.Label>
                    <Form.Control required type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Введите адрес"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>
                        Номер телефона
                    </Form.Label>
                    <Form.Control required type="number" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Введите email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Введите email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control required type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Введите логин"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Введите пароль"/>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Button variant="primary" type="submit">Зарегистрироваться</Button>
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    <Modal show={confirm_show} onHide={handleConfirmClose}>
        <Modal.Header closeButton>
            <Modal.Title>Подтверждение</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Код подтверждения</Form.Label>
                    <Form.Control type="text" value={username} placeholder="Введите код подтверждения"/>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Button variant="primary">Далее</Button>
                </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    </>
    )
  }
}