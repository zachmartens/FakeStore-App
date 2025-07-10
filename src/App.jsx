import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
