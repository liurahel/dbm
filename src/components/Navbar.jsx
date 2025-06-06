import { Link, NavLink } from 'react-router-dom';
import UserInfo from './UserInfo';
import CartSummary from './CartSummary';
import SetColorMode from "./SetColorMode";
import HamMenu from "./HamMenu";
import { useState } from "react";

export default function NavBar() {
  const navBarContent = [
    { to: "/", label: "關於首頁" },
    { to: "/information", label: "市集資訊" },
    { to: "/online-shop", label: "線上市集" },
    { to: "/shopper-shop", label: "攤位名單" },
    { to: "/problem", label: "常見問題" },
  ];  
  const [isOpen, setIsOpen] = useState(false)

  const NavBarContent = () => (
    <div className="flex flex-row gap-8 justify-center items-center whitespace-nowrap">
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
    <div className="hidden md:flex justify-around items-center h-20 w-6xl fixed top-2 z-50 px-4 py-4 shadow-md rounded-[20px] nav-bg nav-text">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <Link to="/" className="hidden sm:block">
        <img src="/images/企劃書.png" alt="不要B我LOGO" className="w-30 h-auto absolute items-center left-2 md:left-6 top-1.5 cursor-pointer
        transition-transform duration-300 hover:animate-spin" /></Link>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
          <NavBarContent />
        </div>

        {/* 右側購物車 */}
          <div className="flex space-x-4 items-center mr-5">
              <UserInfo />
              <CartSummary />
              <div className="flex items-center icon-text">
                <SetColorMode/>
              </div>
          </div>
          {/*<div className="flex items-center">
            <UserInfo />
          </div>
          <div className="flex items-center">
            <CartSummary />
          </div>
          <div className="flex items-center">
            <SetColorMode/>
          </div>*/}
      </div>
    </div>

      

      {/* 手機版 Drawer */}
      <div className="drawer sm:hidden fixed top-8 left-0 w-full z-50">
        <input
          id="drawer-toggle"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          readOnly
        />

        {/* 漢堡 icon */}
        <HamMenu
          id="drawer-toggle"
          className="absolute top-0 left-4 z-50 drawer-bg w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />

        {/* 側邊選單 */}
        <div className={`drawer-side fixed top-0 left-0 z-40 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <label
            htmlFor="drawer-toggle"
            className="drawer-overlay fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></label>
          
          <div className="menu p-4 w-64 min-h-screen flex flex-col gap-6 pt-20 pb-15 drawer-bg drawer-text ">
            <h2 className="text-xl font-bold mb-6 text-center">不要B我市集 | 選單</h2>

            {/* 手機選單改為垂直排列 */}
            <div className="flex flex-col gap-4">
              {navBarContent.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold transition-all ${
                      isActive ? 'opacity-100 font-bold' : 'opacity-70'
                    } hover:opacity-100`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* LOGO */}
            <div className="mt-auto pt-6 text-center sm:hidden">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img
                  src="/images/企劃書.png"
                  alt="不要B我LOGO"
                  className="w-32 h-auto mx-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* 右上角功能區 */}
        <div className="flex space-x-2 items-center justify-end fixed top-10 right-5 z-50">
          <UserInfo />
          <CartSummary />
          <SetColorMode />
        </div>
      </div>

    </>
  );
}