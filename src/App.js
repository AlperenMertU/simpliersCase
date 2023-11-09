import React from 'react'
import "./styling/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import ChatScreen from "./components/ChatScreen";
import sunIcon from "./assets/sun.png";

export default function App() {


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

          <Route path="/" element={<LoginScreen />}>
          </Route>
          <Route path="/chat" element={<ChatScreen />}>
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  )

}
