import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./Home";
import Product from "./Product";
import SingleProduct from "./SingleProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/product" element={<Product/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
