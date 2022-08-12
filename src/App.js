import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Textform from "./Textform";
import About from "./About";
import Alert from "./Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [bmode, setbmode] = useState('dark')
  const [alert, setalert] = useState({
    msg: "Alert",
    type: "Success"
  })
  const alertf = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
  }
  const toggleColor = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      alertf("Dark mode has been enabled", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      alertf("Light mode has been enabled", "Success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleColor={toggleColor} />
      <Alert alert={alert} />
      <div className="container mt-3">
        <Routes>
          <Route exact path="/About" element={<About />}> </Route>
          <Route exact path="/" element={<Textform  title="Enter your text to Analyse below" mode={mode} />}></Route>
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
