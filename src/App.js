import React, { useState } from 'react';
import "./styling/app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import ChatScreen from "./components/ChatScreen";
import { useDispatch, useSelector } from 'react-redux';

export default function App() {

  
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <h3>chatApp</h3>
          <div className="about">
            <p>about</p>
            <p>sss</p>
          </div>
        </div>
      
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            login ? (
              <Navigate to="/chat" />
            ) : (
              <LoginScreen control={login} onLogin={handleLogin} />
            )
          }
          ></Route>
          <Route
            path="/chat"
            element={login ? <ChatScreen /> : <Navigate to="/" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
