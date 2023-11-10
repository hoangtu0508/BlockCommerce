
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Men from './pages/Collection/Men';
import Women from './pages/Collection/Women';
import ProductDetails from './component/ProductDetails/ProductDetails';
import Shop from './pages/Shop/Shop';
import Cart from './component/ShoppingCart/Cart';
import Checkout from './component/Checkout/Checkout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='sign-in' element={<Login />} />
          <Route path='sign-up' element={<Register />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='shop' element={<Shop />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='product-details/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
