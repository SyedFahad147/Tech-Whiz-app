import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route  } from "react-router";

const App = () => {
  return (
    <>
    <Navbar />
      {/* // Except of switch we use Routes that is import from react-router// */}
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/service" Component={Service} />
        <Route exact path="/contact" Component={Contact} />
        {/* <Route path="/redirect" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
