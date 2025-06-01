import "antd/dist/reset.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import { HelmetProvider } from 'react-helmet-async'

import "./App.css";
import Home from "./pages/Home";
import OnlineShop from "./pages/OnlineShop"
import Product from "./pages/Product";
import store from "./redux/store";
import Shopper from "./pages/Shopper"
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
            <Route path="/shopper" element={<Shopper />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}

export default App;