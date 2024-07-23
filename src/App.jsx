import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import SubjectRights from "./Components/Subject Rights/SubjectRights";
import UnifiedConsent from "./Components/Unified Consent/UnifiedConsent";
import TrustHub from "./Components/TrustHub/TrustHub";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/subject-rights" element={<SubjectRights />} />
        <Route path="/unified-consent" element={<UnifiedConsent />} />
        <Route path="/trust-hub" element={<TrustHub />} />
      </Routes>
    </Router>
  );
}

export default App;
