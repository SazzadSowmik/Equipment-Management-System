import React, { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import uiImg from "../images/login_page.svg";
import "./login.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useHistory,
  useLocation,
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Logo from "../images/coderexIcon.png";
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import { clippingParents } from "@popperjs/core";
import axios from "axios";
import LoginVerification from "./LoginVerification";
import { UserContext } from "../context/UserContext";
import {toast} from 'react-toastify';




const Login = () => {

  const [errMsg, setErrMsg] = useState(false);
  const [userData, setUserData] = useState('');
  const redirectToDashboard = useNavigate();

  useEffect (()=>{
    axios.get('http://localhost:8888/src/php/api/users.php')
    .then(resp => {
      //console.log(resp.data);
      setUserData(resp.data)

    })
    .catch((error)=>{
      console.log("Not found! "+error);
    }
    );
  },[]);

  //console.log(userData);
 
  const [formData,setFormData] = useState({
    email: "",
    password: ""
  });

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const [errorMessage, setErrorMessage] = useState('');


  

  const submitForm = async (e) => {
    e.preventDefault();
    for(let i=0;i<Object.keys(userData).length;i++){
      if (formData.email === userData[i].email && formData.password === userData[i].password){
        localStorage.setItem("token",JSON.stringify(userData[i].role));
        redirectToDashboard("/dashboard");
        break;
      }
      else {
        setErrorMessage('Wrong email or password!');
      }
    }
  }
  return (
    <div>
      <div className="container mt-5">
        <Row>
          <Col lg={6} md={6} className="text-center mt-5 p-3">
            <img className="mb-4" src={Logo} width="45px"></img>
            <form onSubmit={submitForm}>
              <div className="mb-3 form-group">
                <input
                  type="email"
                  name="email"
                  onChange={onChangeInput}
                  placeholder="Enter email"
                  id="email"
                  value={formData.email}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3 form-group">
                <input
                  type="password"
                  name="password"
                  onChange={onChangeInput}
                  placeholder="New password"
                  id="password"
                  value={formData.password}
                  className="form-control"
                  required
                />
              </div>
              {errorMessage && (
                <p className="error" style={{color: 'red'}}> {errorMessage} </p>
              )}

              <button className="btn btn-primary w-100" type="submit">
                Sign In
              </button>

              {/* forgot-password can be added later here */}
            </form>
          </Col>
          <Col lg={6} md={6}>
            <img className="svg" src={uiImg} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
