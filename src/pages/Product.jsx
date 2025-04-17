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
            className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
         />
         <ProductDetail product={product} className="content max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto" />
         <Footer className="footer mt-8 sm:mt-12 lg:mt-16" />
      </div>
   );
}

export default Product;