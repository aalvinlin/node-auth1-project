import React from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";

import "./App.css";

const App = () => {

  return (
    <>
      <h2>Sign Up</h2>
      <Signup />
      
      <h2>Log In</h2>
      <Login />
      
    </>
  );

}

export default App;