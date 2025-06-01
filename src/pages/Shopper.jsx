import { useParams } from 'react-router';
import Header from "../components/Header";
import shoppers from '../json/dbm.json';
import ShopperDetail from "../components/ShopperDetail";
import Footer from "../components/Footer/index";
import { Helmet } from 'react-helmet-async';

function Shopper() {
    const { shopperId } = useParams();
    const shopper = shoppers.find( // productList改成products
     (x) => x.id === Number(shopperId))

    return (
      <div className="container mx-auto main-layout content-bf">
        <Helmet>
            <title>不要B我市集 | 攤位名單</title>
        </Helmet>
        <Header 
          title="攤位名單"
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
        />
        <ShopperDetail shopper={shopper} className="content max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto" /> 
        <Footer className="footer mt-8 sm:mt-12 lg:mt-16" />
      </div>
    )
  }
  
  export default Shopper;