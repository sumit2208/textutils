import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import AboutUs from './components/AboutUs';
import TextForm from './components/TextForm';
// import Carding from './components/Carding';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark")
  const [modetext, setmodetext] = useState("Enabled Light Mode")
  const [textcolor, setTextColor] = useState("text-light")
  const [alert, setAlert] = useState(null);

  const showalert = (messag, type) => {
    setAlert({
      msg: messag,
      type: type
    })
  }

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")
      setmodetext("Enabled Light Mode")
      setTextColor("text-light")
      document.body.style.backgroundColor = "#373c3f";
      document.body.style.color = "white"
      showalert("Enabled Dark mode", "success")
      document.title = "Textutils-Dark mode"
    }
    else {
      setMode("light")
      setmodetext("Enabled Dark Mode")
      setTextColor("text-dark")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
      showalert("Enabled Light mode", "success")
      document.title = "Textutils-Light mode"
    }
  }
  

  return (
    <>
      {/* <Router> */}
        <Navbar title="Today's Blog" mode={mode} textcolor={textcolor} modetext={modetext} togglemode={togglemode} home="Home" About="About Us" Search="Search" />
        <strong><Alert alert={alert} /> </strong>
        <br />
        <div className="container my-3">
        <TextForm heading="Enter your Text to Convert Below text Into UpperCase" />
          {/* <Routes>
            <Route path="/about" element={<AboutUs />} /> */}
            {/* <Route path="/" element={<TextForm heading="Enter your Text to Convert Below text Into UpperCase" />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
