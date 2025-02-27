import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Sections from "./components/Sections";
import Tour from "./components/Tour";
import Modal from "./components/Modal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <Navbar />
    <Page />
    <Sections />
    <Tour />
    <Modal />
    <Contact />
    <Footer />
    </>
  )
}

export default App