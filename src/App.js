import './App.css';
import { useState } from "react";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Removed extra space
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#EE6123';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f3ba95';
      showAlert("Light mode has been enabled", "warning");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Sagar" mode={mode} toggleMode={toggleMode} homeText="Home" aboutText="About Me" skillsText="Skills" contactText="Contact me" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
