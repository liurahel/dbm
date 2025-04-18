import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer/index";
import products from "../json/dbm.json";
import { Helmet } from 'react-helmet-async';

function OnlineShop() {

    return (
      <div className="container mx-auto main-layout content-bf min-h-screen">
        <Helmet>
          <title>不要B我市集 | 線上市集</title>
        </Helmet>
        <Header 
          title="線上市集"
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
        />
        <ProductList products={products} className="content grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4" /> 
        <Footer className="footer mt-8 sm:mt-12 lg:mt-16" />
      </div>
    )
  }
  
  export default OnlineShop;