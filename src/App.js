import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Header from './Components/Header';
import Product from './Components/Product';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
     
    </>
  );
}

export default App;
