import React, { Component } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Routes , Route , Navigate } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/signup"  element={<SignUp />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/" element={<Navigate to="signup" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
