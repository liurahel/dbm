import { useParams } from 'react-router';
import Header from "../components/Header";
import Footer from "../components/Footer/index";
import products from '../json/dbm.json';
import ProductDetail from '../components/ProductDetail';

function Product() {
    const { productId } = useParams();
    const product = products.find( // productList改成products
        (x) => x.id === Number(productId))
    const title = "Product Detail";

    return (
        <div className="container mx-auto main-layout bg-gray-900">
           <Header
              title="線上市集"
              // slogan="An example made by Vite."
           />
           <ProductDetail product={product} className="content" />
           <Footer className="footer" />
        </div>
     );
}

export default Product;