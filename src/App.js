import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemDetailContainer from './pages/ItemDetailContainer';


function App() {
  return ( 
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ItemDetailContainer />} />
        
      </Routes>
    </Router>
  );
}

export default App;
