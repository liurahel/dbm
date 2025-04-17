import { Link } from 'react-router';
import _ from "lodash";

function ProductItem({ product }) {
   return (
      <section className="container">
         <div className="border border-gray-500 rounded overflow-hidden">
            <Link to={`/products/id/${product.id}`}>
            <img className="w-full aspect-square object-cover" src={product.cover} alt={product.title} />
            </Link>
         </div>
         <div className="text-[#1A1A1A]">
            <h5 className="mt-2 truncate w-full overflow-hidden whitespace-nowrap font-semibold">
               {product.title}
            </h5>
            <h6 className="text-[#686868]">
               {product.author}
            </h6>
            <div className="flex justify-between flex-wrap">
               <span className="items-center leading-none text-lg mt-2">
                  NT$ {product.price}
               </span>
            </div>
         </div>
      </section>
   );
}

export default ProductItem;