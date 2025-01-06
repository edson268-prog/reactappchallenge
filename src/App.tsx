import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import UseEffectExample from './components/UseEffectExample/UseEffectExample';
import './App.css';
import MapExample from './components/MapExample/MapExample';
import PokeInfo from './components/PokeAPI/PokeInfo';
import PokeList from './components/PokeAPI/PokeList';
import Navbar from './components/Navbar/Navbar';
import { ItemDetailContainer } from './components/MapExample/ItemDetailContainer';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <ItemDetailContainer itemId={2} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/use-effect" element={<UseEffectExample />} />
            <Route path="/map" element={<MapExample />} />
            <Route path="/pokemon" element={<PokeInfo />} />
            <Route path="/pokeinfo" element={<PokeInfo />} />
            <Route path="/pokelist" element={<PokeList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App

