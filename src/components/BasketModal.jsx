import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import { ShoppingBasket } from "lucide-react";

export default function BasketModal({ isOpen, toggleModal }) {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0)
         ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   };

   return (
      <>
         {/* DaisyUI Modal */}
         {isOpen && (
            <div className="modal modal-open">
               <div className="modal-box max-w-md">
                  <h3 className="font-thin text-[2rem] mb-4 text-left text-[#2B2B2B]">購物車</h3>
                  {/* Cart Items */}
                  {cartItems.length === 0 ? (
                     <div className="text-center text-[#686868]">-目前無商品-</div>
                  ) : (
                     cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center pb-4 mb-4 border-b border-[#2B2B2B]">
                           <Link to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`} onClick={handleCancel}>
                              <img className="max-w-16 max-h-16 flex-1 cursor-pointer" src={item.image} alt={item.name} />
                           </Link>
                           <div className="ml-4 flex-8 w-48 text-left title text-[#2B2B2B]">
                              <div className="font-bold mb-1">{item.name}</div>
                              <div className="flex items-center space-x-2">
                                 <span>數量</span>
                                 <select
                                    defaultValue={item.qty}
                                    onChange={(e) =>
                                       dispatch(addCartItems({
                                          id: item.id,
                                          title: item.name,
                                          cover: item.image,
                                          price: item.price,
                                          countInStock: item.countInStock,
                                          qty: Number(e.target.value),
                                       }))
                                    }
                                    className="select select-bordered select-xs w-[3.5rem] px-2"
                                 >
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                       <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                 </select>
                              </div>
                           </div>
                           <div className="text-right text-[#2B2B2B]">
                              <div className="font-bold text-base">NT$ {item.price * item.qty}</div>
                              <div
                                 className="text-xl opacity-60 cursor-pointer"
                                 onClick={() => dispatch(removeCartItems(item.id))}
                              >
                                 x
                              </div>
                           </div>
                        </li>
                     ))
                  )}

                  {/* Total */}
                  <div className="flex justify-between items-center mb-2 text-[#1A1A1A]">
                     <div className="font-semibold">總價</div>
                     <div className="font-bold text-right">NT$ {getTotalPrice()}</div>
                  </div>

                  {/* Checkout Button */}
                  <button
                     className="btn btn-primary w-full text-base font-light py-3 flex justify-center items-center bg-[#854D8E] rounded-lg hover:bg-[#743D7A] transition-al"
                  >
                     <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-[#FFF9F0] group-hover:scale-105 transition-transform" />
                     <span className="font-thin text-[#FFF9F0]">結帳</span>
                  </button>

                  {/* Close button */}
                  <div className="absolute right-4 top-4 modal-action mt-4">
                     <button onClick={handleCancel} className="btn btn-sm font-thin">X</button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}