import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import UseEffectExample from './components/UseEffectExample/UseEffectExample';
import './App.css';
import MapExample from './components/MapExample/MapExample';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-brand">React Challenge</div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Contador</Link>
            </li>
            <li className="navbar-item">
              <Link to="/use-effect" className="navbar-link">useEffect</Link>
            </li>
            <li className="navbar-item">
              <Link to="/map" className="navbar-link">Map</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/use-effect" element={<UseEffectExample />} />
            <Route path="/map" element={<MapExample />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
