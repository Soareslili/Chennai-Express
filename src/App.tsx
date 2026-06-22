import { useEffect, useState } from "react";
import { getProduct } from "./service/ProductService";
import Header from "./Components/Home/Header"
import Hero from "./Components/Layout/Hero"
import type { Product } from "./types/products";
import Packeges from "./Components/Layout/Packeges";
import ScrollToTop from "./Components/ui/ScrollToTop";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Products } from "./service/Products";
import CartSheet from "./Components/Layout/CartSheet";
import CheckoutModal from "./pages/Checkout";
import Contact from "./pages/Contact";

import Footer from "./pages/Footer";
import Combos from "./pages/Combos";


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
    <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products products={products} onProductClick={handleProductClick} showViewAll={false} />
                <Combos />
                <Packeges />

              </>
            }

            />
            <Route path="/products" element={
              <Products products={products} onProductClick={handleProductClick} showViewAll={true} />

            } />

            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
        <CartSheet />
        <CheckoutModal />
        <Footer />
      </div>
    </BrowserRouter>


  );
}

export default App;