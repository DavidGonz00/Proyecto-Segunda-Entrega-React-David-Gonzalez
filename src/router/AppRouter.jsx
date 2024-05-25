import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import ItemListContainer from '../Components/ItemListContainer';
import ItemList from '../Components/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer';
import Footer from '../Components/Footer/Footer';
import Bienvenido from '../Components/Bienvenido/Bienvenido';

function App() {
  return (
    <Router>
      <Navbar />
      <Bienvenido/>
      <Routes>
        <Route path="/" element={<ItemList/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
