import { useEffect, useState } from "react";
import { getProduct } from "./service/ProductService";
import Header from "./Components/Home/Header"
import Hero from "./Components/Layout/Hero"
import type { Product } from "./types/products";

import {  Routes, Route, BrowserRouter } from "react-router-dom";
import { Products } from "./service/Products";


function App() {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    getProduct()
      .then((data) => {
        console.log("Produtos carregados:", data); 
        setProducts(data);
      })
      .finally(() => (false));
  }, []);


  const handleProductClick = (product: Product) => {
    console.log("Produto clicado:", product);
  };

  return (
    
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products products={products} onProductClick={handleProductClick} showViewAll={false} />
               
              </>
            } />
            <Route path="/products" element={        
              <Products products={products} onProductClick={handleProductClick} showViewAll={true} />
            } />
          </Routes>
        </main>
   
      </div>
    </BrowserRouter>
     
    
  );
}

export default App;