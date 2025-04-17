import React from 'react';

function ShopperList() {
   return (
      <div className="flex flex-col items-center content w-full max-w-screen-lg mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">

        </div>
         <img src="/images/不要B我市集 (亮).png" alt="不要B我市集" className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] h-auto mx-auto mt-25 mb-4"/>
         <p>實體市集時間：2025年7月18日(五) - 7月20日(日)<br />線上攤位時間：2025年7月21日(一) - 8月21日(四)</p>
      </div>
   );
}

export default ShopperList;