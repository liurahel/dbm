import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer/index";
import products from "../json/dbm.json";

function OnlineShop() {

    return (
      <div className="container mx-auto main-layout bg-[#FFF9F0] min-h-screen">
        <Header 
          title="線上市集"
        />
        <ProductList products={products} className="content" /> 
        <Footer className="footer" />
      </div>
    )
  }
  
  export default OnlineShop;