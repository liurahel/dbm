import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer/index";
import products from "../json/dbm.json";
import { Helmet } from 'react-helmet-async';

function OnlineShop() {

    return (
      <div className="container mx-auto main-layout bg-[#FFF9F0] min-h-screen">
        <Helmet>
          <title>不要B我市集 | 線上市集</title>
        </Helmet>
        <Header 
          title="線上市集"
        />
        <ProductList products={products} className="content" /> 
        <Footer className="footer" />
      </div>
    )
  }
  
  export default OnlineShop;