import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResultsPage from "./Components/ResultsPage";
import Register from "./Components/Regstier";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} /> {/* الصفحة الرئيسية هي صفحة التسجيل */}
        <Route path="/results" element={<ResultsPage />} /> {/* صفحة النتائج */}
      </Routes>
    </Router>
  );
}

export default App;
