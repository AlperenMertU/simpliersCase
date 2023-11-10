import React, { useState } from 'react';
import "../styling/loginScreen.css";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import { useDispatch } from 'react-redux';
import { setName } from '../components/minComponent/UserSlice';

import chatIcon from "../assets/chaticon.png";
import googleLogo from "../assets/google.png";
import faceLogo from "../assets/face.png";

const LoginScreen = ({ control, onLogin  }) => {

  const dispatch = useDispatch();

  const handleName = (event) => {
    const value = event.target.value;
    dispatch(setName(value));
  };



 


  const handleButtonClick = () => {
    onLogin();
  };


  return (
    <div id='container'>
      <form>
        <div className="logo">
          <img style={{ height: 65 }} src={chatIcon} alt="Logo" />
          <p>modern chat app</p>
        </div>
        <div className="inputs">
          <div className='name'>
            <TextField
              id="input-with-icon-textfield"
              label="Ad & Soyad"
              onChange={handleName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
          <div className='mail'>
            <TextField
              id="input-with-icon-textfield"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </div>
        </div>
        <div className="loginSection">
          <Button variant="contained" onClick={handleButtonClick}>
            Giriş Yap!
          </Button>
          <p>or</p>
          <div className="images">
            <img style={{ height: 30, paddingRight: 22 }} src={faceLogo} alt="Logo" />
            <img style={{ height: 30 }} src={googleLogo} alt="Logo" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
