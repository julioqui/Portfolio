import React from 'react';
import Home from "./Home";
import Resume from "./Resume";
import PDF from "./PDF";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../styles/App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="resume" element={<Resume/>}></Route>
          <Route path="resume/pdf" element={<PDF/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
