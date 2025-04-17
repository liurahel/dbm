import { useParams } from 'react-router';
import Header from "../components/Header";
import Footer from "../components/Footer/index";
import products from '../json/dbm.json';
import ProductDetail from '../components/ProductDetail';
import { Helmet } from 'react-helmet-async';

function Product() {
   const { productId } = useParams();
   const product = products.find( // productList改成products
     (x) => x.id === Number(productId))

   return (
     <div className="container mx-auto main-layout bg-[#FFF9F0]">
         <Helmet>
            <title>不要B我市集 | 線上市集</title>
         </Helmet>
         <Header
            title="線上市集"
         />
         <ProductDetail product={product} className="content" />
         <Footer className="footer" />
      </div>
   );
}

export default Product;