import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/Global';

import {Routes, Route} from 'react-router-dom';
import { NavBar } from './components';

// Context imports
import ProductsProvider from './context/ProductsContext';

// Pages imports
import Home from './pages/Home';
import Cart from "./pages/Cart";
import Recipes from "./pages/Recipes";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ItemDetailContainer from './components/sections/ItemDetailContainer';
import AddProduct from './components/sections/AddProduct';
import CartProvider from './context/CartContext';

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
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/products/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AddProduct />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
