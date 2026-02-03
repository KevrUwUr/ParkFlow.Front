import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";

function AppRoutes() {
  return (
    <Router basename="/ParkFlow.Front">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;