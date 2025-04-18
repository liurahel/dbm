import Header from "../components/Header";
import ShopperList from "../components/ShopperList";
import Footer from "../components/Footer/index";
import { Helmet } from 'react-helmet-async';

function Shopper() {
    return (
      <div className="container mx-auto main-layout content-bf min-h-screen">
        <Helmet>
            <title>不要B我市集 | 攤位名單</title>
        </Helmet>
        <Header 
          title="攤位名單"
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
        />
        <ShopperList className="content max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto" /> 
        <Footer className="footer mt-8 sm:mt-12 lg:mt-16" />
      </div>
    )
  }
  
  export default Shopper;