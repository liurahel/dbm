import Header from "../components/Header";
import ShopperList from "../components/ShopperList";
import Footer from "../components/Footer/index";
import shoppers from "../json/shopper.json";
import { Helmet } from 'react-helmet-async';

function ShopperShop() {

    return (
      <div className="container mx-auto main-layout content-bf min-h-screen">
        <Helmet>
          <title>不要B我市集 | 攤位名單</title>
        </Helmet>
        <Header 
          title="攤位名單"
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
        />
        <ShopperList shoppers={shoppers} className="content grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4" /> 
        <Footer className="footer mt-8 sm:mt-12 lg:mt-16" />
      </div>
    )
  }
  
  export default ShopperShop;