import ProductItem from './ProductItem'

function ProductList({products}) {
   const hotProducts = products.filter(product => product.category === "熱門商品");
   const newProducts = products.filter(product => product.category === "最新上架");
   const discountProducts = products.filter(product => product.category === "優惠打折");

   return (
      <div className="flex flex-col items-center content w-full max-w-screen-lg mx-auto">
         <div className="flex items-center gap-3 text-left self-start mb-4">
            <div className="w-4 h-7 bg-[#854D8E] rounded-tl-lg rounded-bl-lg"></div>
            <span className="text-[#1A1A1A] text-2xl font-medium">熱門商品</span>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 justify-center gap-4 mx-auto">
            {hotProducts.map(product => (
               <ProductItem key={product.id} product={product} />
            ))}
         </div>

         <div className="flex items-center gap-3 text-left self-start mt-15 mb-4">
            <div className="w-4 h-7 bg-[#854D8E] rounded-tl-lg rounded-bl-lg"></div>
            <span className="text-[#1A1A1A] text-2xl font-medium">最新上架</span>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 justify-center gap-4 mx-auto">
            {newProducts.map(product => (
               <ProductItem key={product.id} product={product} />
            ))}
         </div>

         <div className="flex items-center gap-3 text-left self-start mt-15 mb-4">
            <div className="w-4 h-7 bg-[#854D8E] rounded-tl-lg rounded-bl-lg"></div>
            <span className="text-[#1A1A1A] text-2xl font-medium">優惠打折</span>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 justify-center gap-4 mx-auto">
            {discountProducts.map(product => (
               <ProductItem key={product.id} product={product} />
            ))}
         </div>
         <img src="/images/不要B我市集 (亮).png" alt="不要B我市集" className="w-2xl h-auto mx-auto mt-25 mb-4"/>
         <p>實體市集時間：2025年7月18日(五) - 7月20日(日)<br />線上攤位時間：2025年7月21日(一) - 8月21日(四)</p>
      </div>
   );
}

export default ProductList;