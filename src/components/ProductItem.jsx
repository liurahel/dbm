import { Link } from 'react-router-dom';
import _ from "lodash";

function ProductItem({ product }) {
   return (
      <section className="container max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
         <div className="border border-gray-500 aspect-square rounded overflow-hidden">
            <Link to={`/products/id/${product.id}`}>
            <img className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] aspect-square object-cover mx-auto" src={product.cover} alt={product.title} />
            </Link>
         </div>
         <div className="title-text">
            <h5 className="w-full overflow-hidden line-clamp-2 font-semibold text-sm sm:text-base lg:text-lg min-h-[3.5rem]">
               {product.title}
            </h5>
            <h6 className="truncate w-full overflow-hidden whitespace-nowrap text-xs sm:text-sm lg:text-base stitle-text">
               {product.author}
            </h6>
            <div className="flex justify-between flex-wrap price-text">
               <span className="items-center leading-none text-lg">
                  NT$ {product.price}
               </span>
            </div>
         </div>
      </section>
   );
}

export default ProductItem;