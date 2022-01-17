import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting="Welcome to my first e-commerce!" />
    </div>
  );
}

export default App;
