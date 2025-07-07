import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import { authService } from "./services/api";
import { Toaster } from "sonner";

// 🔐 Wrapper to protect private routes
const PrivateRoute = ({ children }) => {
  const user = authService.getCurrentUser();
  return user ? children : <Navigate to="/login" replace />;
};

// 🧠 Optional: check if admin
const AdminRoute = ({ children }) => {
  const user = authService.getCurrentUser();
  return user && user.role === "admin" ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Toaster position="top-right" richColors />
    </Router>
  );
}


export default App;