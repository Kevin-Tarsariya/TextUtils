import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar 
        title="TextUtils" 
        aboutText="About us" 
        Mode={Mode} 
        toggleMode={toggleMode} 
      />
      <Alert alert={alert} onDismiss={() => setAlert(null)} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={
            <TextForm 
              showAlert={showAlert} 
              heading="Enter Text To Analyze" 
            />
          } />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;