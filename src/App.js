import React, { useState } from 'react';
import "./styling/app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import ChatScreen from "./components/ChatScreen";
import sunIcon from "./assets/sun.png";

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
        <div className="darkmode">
          <img style={{ height: 35 }} src={sunIcon} alt="Logo" />
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route  path="/"     element={
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
