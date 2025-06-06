import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";
import { ShoppingBasket } from "lucide-react";

export default function AddToBasket({ product, qty }) {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const addToCart = () => {
        setShowToast(true); // 顯示 toast
        dispatch(addCartItems({
            id: product.id,
            name: product.title,
            image: product.cover,
            price: product.price,
            countInStock: product.stock,
            qty,
        }))
        // 2 秒後自動關閉 toast
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      };

    return (
    <>
        <button className="btn btn-primary px-8 py-5 icon-bg iccon-text rounded-lg hover:bg-[#743D7A] transition-al" onClick={addToCart}>
            <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-105 transition-transform iccon-text" />
            <span className="font-normal ml-3 iccon-text">加到購物車</span>
        </button>
        {showToast && (
            <div className="toast toast-end">
              <div className="alert content-text">
                <span>
                  {qty} {qty > 1 ? "個" : "個"} {product.title} {qty > 1 ? "已" : "已"} 加到購物車
                </span>
              </div>
            </div>
        )}
    </>

    );
}