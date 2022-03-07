import { ThemeProvider } from 'styled-components';
import {Routes, Route} from 'react-router-dom';

// Context imports
import ProductsProvider from './context/ProductsContext';
import CartProvider from './context/CartContext';

// Components
import Home from './pages/Home';
import Cart from "./pages/Cart";
import About from "./pages/About";
import ItemDetailContainer from './components/sections/ItemDetailContainer';
import AddProduct from './components/sections/AddProduct';
import NavBar from './components/elements/NavBar';
import ColorPalette from './components/elements/ColorPalette'
import Checkout from './components/sections/Checkout'

// Styled Components
import GlobalStyles from './components/styled/Global';

// Color Palette
const theme = {
  colors: {
    primary: "#7ECA9C",
    secondary: "#CCFFBD",
    light: "#F7F7EE",
    dark: "#1C1427",
    grey: "#40394A",
    accent: "#FB7813"
  }
}

function App() {
  return ( 
    <>
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <CartProvider>
          <GlobalStyles />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<AddProduct />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
