import React, {useState, useEffect} from "react";
import { Navbar, Nav, NavLink, Button, Container, Form, Modal, CloseButton } from "react-bootstrap";
import {Link} from 'react-router-dom';
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

    const [login_show, setLoginShow] = useState(false);
    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    const [register_show, setRegisterShow] = useState(false);
    const handleRegisterClose = () => setRegisterShow(false);
    const handleRegisterShow = () => setRegisterShow(true);

    const [currentUser, setCurrentUser] = useState();
    const [registrationToggle, setRegistrationToggle] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  useEffect(() => {
    client.get("/api/auth/users/me/")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  function update_form_btn() {
    if (registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/api/auth/users/",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function(res) {
      client.post(
        "/api/auth_token/token/login",
        {
          username: username,
          password: password
        }
      ).then(function(res) {
        setCurrentUser(true);
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
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/auth_token/token/logout"
    ).then(function(res) {
      setCurrentUser(false);
    });
  }
  if(currentUser){
    return (
        <>
    <Styles>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>   
                <Navbar.Brand>SportCenter</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'></Navbar.Collapse>
                <Nav className='me-auto'>
                    <Nav.Item>
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/coaches">Coaches</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Today Sessions</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <form onSubmit={e => submitLogout(e)}>
                        <Button variant="outline-danger" className="me-2" type="submit">Выйти</Button>{' '}
                        </form>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </Styles>
    </>
    )
  } else {

    return ( 
    <>
    <Styles>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>   
                <Navbar.Brand>SportCenter</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'></Navbar.Collapse>
                <Nav className='me-auto'>
                    <Nav.Item>
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/coaches">Coaches</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Today Sessions</Nav.Link>
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
    <Modal show={register_show} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
            <Modal.Title>Регистрация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="me-2" controlId="formBasicName">
                    <Form.Label>
                        ФИО
                    </Form.Label>
                    <Form.Control type="text" placeholder="Введите ФИО"/>
                </Form.Group>
                <Form.Group className="me-2" controlId="formBasicEmail">
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="Введите email"/>
                </Form.Group>
                <Form.Group className="me-2" controlId="formBasicPassword">
                    <Form.Label>
                        Пароль
                    </Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль"/>
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