import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import ThingsToRead from './ThingsToRead';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/things-to-read" element={<ThingsToRead />} />
      </Routes>
    </Router>
  );
}

export default App;
