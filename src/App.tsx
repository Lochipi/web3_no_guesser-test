import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NumberGuesser from "./components/NumberGuesser";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<NumberGuesser />} />
      </Routes>
    </Router>
  );
};

export default App;
