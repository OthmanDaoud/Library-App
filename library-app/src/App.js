import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Header from "./components/header";
import SignUp from "./components/sign-up";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
