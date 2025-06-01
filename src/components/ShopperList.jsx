import React from 'react';
import ShopperItem from './ShopperItem';

function ShopperList({shoppers}) {
   return (
      <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto px-5 content content-bf content-text">
         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">
            {shoppers.map(shopper => (
               <ShopperItem key={shopper.id} shopper={shopper} />
            ))}
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">
            {shoppers.map(shopper => (
               <ShopperItem key={shopper.id} shopper={shopper} />
            ))}
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">
            {shoppers.map(shopper => (
               <ShopperItem key={shopper.id} shopper={shopper} />
            ))}
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">
            {shoppers.map(shopper => (
               <ShopperItem key={shopper.id} shopper={shopper} />
            ))}
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">
            {shoppers.map(shopper => (
               <ShopperItem key={shopper.id} shopper={shopper} />
            ))}
         </div>
         <div className="theme-bg w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] h-90 bg-cover bg-center mt-25 mb-4"></div>
         <p>實體市集時間：2025年7月18日(五) - 7月20日(日)<br />線上攤位時間：2025年7月21日(一) - 8月21日(四)</p>
      </div>
   );
}

export default ShopperList;