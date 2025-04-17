import Header from "../components/Header";
import ShopperList from "../components/ShopperList";
import Footer from "../components/Footer/index";
import { Helmet } from 'react-helmet-async';

function Shopper() {
    return (
      <div className="container mx-auto main-layout bg-[#FFF9F0] min-h-screen">
        <Helmet>
            <title>不要B我市集 | 攤位名單</title>
        </Helmet>
        <Header 
          title="攤位名單"
        />
        <ShopperList className="content" /> 
        <Footer className="footer" />
      </div>
    )
  }
  
  export default Shopper;