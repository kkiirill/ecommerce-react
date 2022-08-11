import "./App.css";
import { Header } from "./components/common/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/common/Footer/Footer";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { ProductInfo } from "./pages/ProductInfo/ProductInfo";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { newTestUser, userTest } from "./data/user";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { ScrollToTop } from "./functions/scroll/ScrollToTop";
import { User } from "./types";

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("Content-Type", "application/json");

function App() {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const addFacebookUser = (user: any) => {
    if (user) {
      setUser(user);
    }
  };

  const addTestUser = (data: any) => {
    if (JSON.stringify(data) === JSON.stringify(userTest)) {
      setUser(newTestUser);
    }
  };

  return (
    <div className="app">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<ProductInfo />}>
          <Route path=":productID" element={<ProductInfo />} />
        </Route>
        <Route path="/cart" element={<ShoppingCart />} />
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/" />
            ) : (
              <Login addUser={addTestUser} addFacebookUser={addFacebookUser} />
            )
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
