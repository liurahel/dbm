import { useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white dark:bg-[#2B2B2B] p-8 rounded-2xl shadow-lg w-96 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-red-400"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-[#854D8E] dark:text-[#FBCD5C] mb-4">
          登入帳號
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300">密碼</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="輸入密碼"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#854D8E] text-white py-2 rounded-md hover:bg-[#6e3f74]"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  );
}
