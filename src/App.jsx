import "antd/dist/reset.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import { HelmetProvider } from 'react-helmet-async'
import { useState, useEffect } from "react";

import "./App.css";
import Home from "./pages/Home";
import OnlineShop from "./pages/OnlineShop"
import Product from "./pages/Product";
import store from "./redux/store";
import Shopper from "./pages/Shopper"
import ScrollToTop from "./components/ScrollToTop";
import Information from "./pages/Information";
import Problem from "./pages/Problem";
import ShopperShop from "./pages/ShopperShop";
import Login from "./pages/Login";
import Register from "./pages/Register";  
import LoadingDots from "./pages/LoadingDots";

function App() {
 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 假裝 loading 3 秒，你也可以改成等 API 完成再 set false
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <LoadingDots />;

  return (
    <HelmetProvider context={{}}>
      <Provider store={store}>
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/online-shop" element={<OnlineShop />} />
            <Route path="products">
              <Route path="id/:productId" element={<Product />} />
            </Route>
            <Route path="/shopper-shop" element={<ShopperShop />} />
            <Route path="shopper">
              <Route path="id/:shopperId" element={<Shopper />} />
            </Route>
            <Route path="/information" element={<Information />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} /> 
          </Routes>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}

export default App;