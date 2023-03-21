import './App.css';
import react from 'react';
import HomeContent from './breadcumbs/homeContent';
import Header from './breadcumbs/header';
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ProductCatalog from "./components/Catalog";
import Footer from "./breadcumbs/Footer";
import Error from './components/Error';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeContent />}></Route>
        <Route exact path="/productos/:id" element={<ProductCard />}></Route>
        <Route exact path="/catalogo" element={<ProductCatalog />}></Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
