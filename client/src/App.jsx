import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';      // or wherever your Home component is
import Chat from './pages/chat';      // your new chat page
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
