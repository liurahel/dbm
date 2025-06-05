import { Link } from 'react-router-dom';
import _ from "lodash";

function ShopperItem({ shopper }) {
   return (
      <section className="container max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
         <div className="border border-gray-500 aspect-square rounded overflow-hidden">
            <Link to={`/shopper/id/${shopper.id}`}>
            <img className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] aspect-square object-cover mx-auto" src={shopper.cover} alt={shopper.author} />
            </Link>
         </div>
         <div className="title-text mt-4">
            <h6 className="truncate w-full overflow-hidden whitespace-nowrap text-center title-text text-base :text-sm lg:text-lg  font-bold">
               {shopper.author}
            </h6>
         </div>
      </section>
   );
}

export default ShopperItem;