import ShopperItem from './ShopperItem';
import { motion } from "framer-motion";

function ShopperList({shoppers}) {
   return (
      <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto px-5 content content-bf content-text">
         <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-10 mx-auto w-full">
            {/*{shoppers.map(shopper => (
               <ShopperItem key={shopper.id} shopper={shopper} />
            ))}*/}
            {shoppers.map((shopper, index) => (
               <ShopperItem key={shopper.id} shopper={shopper} index={index} />
            ))}
         </div>
         
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col items-center  !mb-0 w-full max-w-screen-lg mx-auto"
         >
         <div className="theme-bg w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] h-90 bg-cover bg-center mt-25 mb-4"></div>
         </motion.div>
         <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col items-center  !mb-0 w-full max-w-screen-lg mx-auto"
         >
            <p>實體市集時間：2025年7月18日(五) - 7月20日(日)<br />線上攤位時間：2025年7月21日(一) - 8月21日(四)</p>
         </motion.div>
      </div>
   );
}

export default ShopperList;