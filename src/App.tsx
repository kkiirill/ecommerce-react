import "./App.css";
import { Header } from "./components/common/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/common/Footer/Footer";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { ProductInfo } from "./pages/ProductInfo/ProductInfo";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<ProductInfo />}>
          <Route path=":productID" element={<ProductInfo />} />
        </Route>
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
