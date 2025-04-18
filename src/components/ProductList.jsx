import ProductItem from './ProductItem'

function ProductList({products}) {
   const hotProducts = products.filter(product => product.category === "熱門商品");
   const newProducts = products.filter(product => product.category === "最新上架");
   const discountProducts = products.filter(product => product.category === "優惠打折");

   return (
      <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto px-5 content content-bf content-text">
         <div className="flex items-center gap-3 text-left self-start mb-4">
            <div className="w-4 h-7 rounded-tl-lg rounded-bl-lg icon-bg"></div>
            <span className="title-text text-2xl font-medium">熱門商品</span>
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">
            {hotProducts.map(product => (
               <ProductItem key={product.id} product={product} />
            ))}
         </div>

         <div className="flex items-center gap-3 text-left self-start mt-15 mb-4">
            <div className="w-4 h-7 rounded-tl-lg rounded-bl-lg icon-bg"></div>
            <span className="title-text text-2xl font-medium">最新上架</span>
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">
            {newProducts.map(product => (
               <ProductItem key={product.id} product={product} />
            ))}
         </div>

         <div className="flex items-center gap-3 text-left self-start mt-15 mb-4">
            <div className="w-4 h-7 rounded-tl-lg rounded-bl-lg icon-bg"></div>
            <span className="title-text text-2xl font-medium">優惠打折</span>
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center gap-4 mx-auto w-full">
            {discountProducts.map(product => (
               <ProductItem key={product.id} product={product} />
            ))}
         </div>
          <div className="theme-bg w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] h-90 bg-cover bg-center mt-25 mb-4"></div>
         <p>實體市集時間：2025年7月18日(五) - 7月20日(日)<br />線上攤位時間：2025年7月21日(一) - 8月21日(四)</p>
      </div>
   );
}

export default ProductList;