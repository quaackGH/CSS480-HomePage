import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import ThingsToRead from './ThingsToRead';
import GamingAchievements from './GamingAchievements';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/CSS480-HomePage/" element={<Home />} />
        <Route path="/things-to-read" element={<ThingsToRead />} />
        <Route path="/gaming-achievements" element={<GamingAchievements />} />
      </Routes>
    </Router>
  );
}

export default App;
