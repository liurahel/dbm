import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingBasket } from "lucide-react";
import { selectCartItems } from "../redux/cartSlice";
import BasketModal from "./BasketModal";

function CartSummary() {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;
    const toggleModal = () => setIsOpen(!isOpen);

    return (
    <>
        <nav
            onClick={toggleModal}
            className="cursor-pointer flex flex-col items-center group"
        >
            <div className="indicator">
                {count > 0 && <span className="indicator-item badge badge-primary font-bold icon-bg iccon-text transform scale-80">{count}</span>}
                <ShoppingBasket strokeWidth={1.5} className="sm:w-6 sm:h-6 w-8 h-8 text-current group-hover:scale-105 transition-transform" />
            </div>
        </nav>
        <BasketModal
            isOpen={isOpen}
            toggleModal={toggleModal}
        />
    </>    
  );
}

export default CartSummary;