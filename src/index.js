import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./data/DataContext";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Accomodation } from "./pages/Accommodations";
import { NotFound } from "./pages/NotFound";
import "./pages/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <DataProvider>
        <Routes>
          <Route path="/Kasa/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/logement/:id" element={<Accomodation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>

      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
