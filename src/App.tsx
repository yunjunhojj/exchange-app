import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import Login from "./pages/Login";
import { isAuthenticated } from "./lib/auth";
import Home from "./pages/Home";
import History from "./pages/History";

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-gray-50">
    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
  </div>
);

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
              <Suspense fallback={<LoadingFallback />}>
                <Home />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingFallback />}>
                <History />
              </Suspense>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
