import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ComplaintPage from "./pages/ComplaintPage";
import TrackTicketPage from "./pages/TrackTicketPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/complaint"
          element={<ComplaintPage />}
        />

        <Route
          path="/track-ticket"
          element={<TrackTicketPage />}
        />

        <Route path="/admin" element={<AdminDashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;