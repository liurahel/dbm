import { BrowserRouter, Routes, Route, Link } from "react-router";
import { Provider } from "react-redux"

import "./App.css";
import Home from "./pages/Home";
import OnlineShop from "./pages/OnlineShop"
import Product from "./pages/Product";
import store from "./redux/store";
import Shopper from "./pages/Shopper"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
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
  );
}

export default App;