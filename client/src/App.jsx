import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';      // or wherever your Home component is
import Chat from './pages/chat';      // your new chat page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
