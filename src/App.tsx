import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import UseEffectExample from './components/UseEffectExample/UseEffectExample';
import './App.css';
import MapExample from './components/MapExample/MapExample';
import PokeInfo from './components/PokeAPI/PokeInfo';
import PokeList from './components/PokeAPI/PokeList';
import Navbar from './components/Navbar/Navbar';
import { ItemDetailContainer } from './components/MapExample/ItemDetailContainer';
import About from './components/About/About';

function App() {

  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/use-effect" element={<UseEffectExample />} />
          <Route path="/productos" element={<MapExample />} />
          <Route path="/pokemon" element={<PokeInfo />} />
          <Route path="/pokeinfo" element={<PokeInfo />} />
          <Route path="/pokelist" element={<PokeList />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:categoria" element={<MapExample />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App

