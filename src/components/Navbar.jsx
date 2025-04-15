import { NavLink } from 'react-router';
import CartSummary from './CartSummary';

export default function NavBar() {

  const navBarContent = [
    { to: "/products/category/tableware", label: "市集資訊" },
    { to: "/products/category/cookware", label: "攤位名單" },
    { to: "/products/category/home-accessories", label: "線上市集" },
    { to: "/products/category/lighting", label: "攤位報名" },
    { to: "/products/category/textile", label: "常見問題" },
  ];  

  return (
    <div className="flex items-center h-20 w-6xl fixed top-8 z-50 bg-[#FFF9F0] py-4 shadow-md rounded-[20px]">
        <div className="flex flex-wrap max-w-6xl mx-auto">
            {/* 左側選單連結 */}
            <div className="flex space-x-6">
                {navBarContent.map(({ to, label }) => (
                    <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `mx-6 text-[#854D8E] text-base font-semibold transition-all duration-500 ease-in-out ${
                        isActive ? "opacity-100 font-normal" : "opacity-70"
                        } hover:opacity-100 hover:[text-shadow:0px_0px_30px_white`
                    }
                    >
                    {label}
                    </NavLink>
                ))}
            </div>

            {/* 右側購物車 */}
            <div className="flex items-center">
            <CartSummary />
            </div>
        </div>
    </div>
  );
}