import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Chat from './pages/chat';
import Login from './pages/login';
import { AuthProvider, useAuth } from './context/AuthProvider';

function AppRoutes() {
  const { authUser } = useAuth(); 

  return (
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={authUser ? <Chat /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
