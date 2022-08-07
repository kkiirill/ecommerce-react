import "./App.css";
import { Header } from "./components/common/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/common/Footer/Footer";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { ProductInfo } from "./pages/ProductInfo/ProductInfo";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { useEffect, useState } from "react";

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');

function App() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: requestHeaders,
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className="app">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<ProductInfo />}>
          <Route path=":productID" element={<ProductInfo />} />
        </Route>
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
