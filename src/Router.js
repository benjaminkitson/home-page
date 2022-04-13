import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Navbar from "./components/shared/Navbar";

const Router = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default Router;
