import React from "react";
import {
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

import Home from "./pages/home";
import Navbar from "./common/components/Navbar";
import WrapperContent from "./common/components/WrapperContentTemplate";

export default function App() {  
  return (
    <Router>
      <Navbar />

      <div className="py-1"></div>

      <WrapperContent>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </WrapperContent>
    </Router>
  )
}