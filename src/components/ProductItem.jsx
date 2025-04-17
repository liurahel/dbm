import { Link } from 'react-router';
import _ from "lodash";

function ProductItem({ product }) {
   return (
      <section className="container max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
         <div className="border border-gray-500 aspect-square rounded overflow-hidden">
            <Link to={`/products/id/${product.id}`}>
            <img className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] aspect-square object-cover mx-auto rounded-md" src={product.cover} alt={product.title} />
            </Link>
         </div>
         <div className="text-[#1A1A1A]">
            <h5 className="mt-2 truncate w-full overflow-hidden whitespace-nowrap font-semibold text-sm sm:text-base lg:text-lg">
               {product.title}
            </h5>
            <h6 className="text-[#686868] text-sm sm:text-base lg:text-lg">
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