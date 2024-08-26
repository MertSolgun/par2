import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Evden from "./Evden";
import Main from "./Main";

function App() {
  return (
    <Router>
      <Routes>
        {Array.from({ length: 50 }, (_, i) => (
          <Route
            key={`evden-${i}`}
            path={`/evden-eve-nakliyat-ankara-${i + 1}`}
            element={<Evden />}
          />
        ))}
        {Array.from({ length: 50 }, (_, i) => (
          <Route
            key={`main-${i}`}
            path={`/ankara-evden-eve-nakliyat-${i + 1}`}
            element={<Main />}
          />
        ))}
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
