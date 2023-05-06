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

    const [validated, setValidated] = useState(false);
  

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
      console.log(res);
      setToken(res.data.auth_token);
    });
  }

  function submitLogout(e) {
    //e.preventDefault();
    client.post(
      "/api/auth_token/token/logout", {withCredentials: true}
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
                <Navbar.Brand>Спортивный Центр</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'></Navbar.Collapse>
                <Nav className='me-auto'>
                    <Nav.Item>
                        <Nav.Link><Link to="/">Главная</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/coaches">Список тренеров</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Сегодняшние занятия</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Мои абонементы</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleShowProfile} className="me-2">Мой профиль</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <form onSubmit={e => submitLogout(e)}>
                        <Button variant="outline-danger" className="me-2" type="submit">Выйти</Button>
                        </form>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </Styles>
    <Offcanvas show={showProfile} onHide={handleCloseProfile} variant='dark'>
      <ProfilePage token={token}/>
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
                        <Nav.Link><Link to="/">Главная</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/coaches">Список тренеров</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Сегодняшние занятия</Nav.Link>
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
            <Form>
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
                    <Button variant="primary" onClick={handleClick}>Далее</Button>
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