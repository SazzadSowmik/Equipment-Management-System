import React, { useState } from "react";
import "./TopBar.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../../images/coderexIcon.png'
import 'react-bootstrap-icons'
import Tooltip from '@mui/material/Tooltip';
//import Login from '../Login'

function TopBar() {
    return (
    <div className="TopBar">
        <Navbar sticky="top">
            <Nav.Item>
                <img src={Logo} width='45px'></img>
            </Nav.Item>
            <Nav.Item style={{marginLeft: '35%', fontFamily: 'Trebuchet MS', fontSize: '1.5em'}}>
                Equipment Management System
            </Nav.Item>
            <Tooltip title="FAQ" arrow>
                <a href='/faq' className="faq">
                    <i class="bi bi-question-circle-fill"></i>
                </a>
            </Tooltip>
       </Navbar>

    </div>)
}


export default TopBar;