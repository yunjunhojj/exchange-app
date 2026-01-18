import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { isAuthenticated } from "./lib/auth";
import Home from "./pages/Home";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const LoginPageWrapper = () => {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return <Login />;
};



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPageWrapper />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
