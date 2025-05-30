import { Link, NavLink } from 'react-router';
import CartSummary from './CartSummary';
import SetColorMode from "../components/SetColorMode";
import HamMenu from "./HamMenu";
import { useState } from "react";

export default function NavBar() {
  const navBarContent = [
    { to: "/", label: "市集首頁" },
    { to: "/online-shop", label: "線上市集" },
    { to: "/shopper", label: "攤位名單" },
  ];  
  const [isOpen, setIsOpen] = useState(false)

  const NavBarContent = () => (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-2">
      {navBarContent.map(({ to, label }) => (
        <NavLink
        key={to}
        to={to}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
            `mx-6 text-base font-semibold transition-all duration-500 ease-in-out ${
            isActive ? "opacity-100 font-normal" : "opacity-70"
            } hover:opacity-100 hhover:shadow-lg`
        }
        >
        {label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <>
    {/* 桌面版導覽列 */}
    <div className="hidden md:flex justify-aroundflex items-center h-20 w-6xl fixed top-2 z-50 px-4 py-4 shadow-md rounded-[20px] nav-bg nav-text">
      <div className="flex items-center justify-center max-w-6xl mx-auto">
        <Link to="/">
        <img src="/images/企劃書.png" alt="不要B我LOGO" className="w-30 h-auto absolute item-center left-2 md:left-6 top-1.5 cursor-pointer
        transition-transform duration-300 hover:animate-spin" /></Link>
        <NavBarContent />
        {/* 右側購物車 */}
          <div className="flex items-center">
            <CartSummary />
          </div>
          <div className="flex items-center">
            <SetColorMode/>
          </div>
      </div>
    </div>

      {/* 手機版 Drawer */}
      <div className="drawer sm:hidden fixed top-8 z-50">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
        <HamMenu
          id="drawer-toggle" 
          className="absolute top-0 left-4 z-50 drawer-bg w-10 h-10 "
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
        <div className="drawer-side z-9999">
          <label htmlFor="drawer-toggle" className="drawer-overlay" onClick=
          {() => setIsOpen(false)}></label>
          <div className="menu p-4 w-64 min-h-full text-center items-center drawer-bg drawer-text">
            <h2 className="text-xl font-bold mb-10">不要B我市集 | 選單</h2>
            <NavBarContent />
            <Link to="/" className="mt-auto">
              <img src="/images/企劃書.png" alt="不要B我LOGO" className="w-40 md:w-48 h-auto cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="flex space-x-4 items-center icon-text ">
          <div className="sm:flex w-10 h-10 justify-center items-center">
            <CartSummary />
          </div>
          <div className="sm:flex w-10 h-10 justify-center items-center">
            <SetColorMode />
          </div>
        </div>
      </div>
    </>
  );
}