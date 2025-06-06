import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeClosed } from "lucide-react";
import { auth } from "../api/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const email = "user@example.com"; // 使用者輸入的 Email
const password = "password123"; // 使用者輸入的密碼

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("帳號註冊成功！使用者：" + userCredential.user.email);
  })
  .catch((error) => {
    alert("註冊失敗：" + error.message);
  });

const RegisterCard = ({ redirect }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
    agreement: false,
  });

  const onFinish = (e) => {
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  return (
    <form
      onSubmit={onFinish}
      className="p-6 mx-auto w-[500px] space-y-4 content"
    >
      <div>
        <label className="label">
          <span className="label-text">使用者名稱</span>
        </label>
        <div className="relative">
          <input
            type="text"
            name="username"
            placeholder="John"
            value={formData.username}
            onChange={e => setFormData({ ...formData, username: e.target.value })}
            className="input w-full pl-10 focus:border-2 focus:border-gray-400 focus:ring-0 focus:outline-none placeholder:text-sm text-base"
            required
          />
          <User
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 border-gray-500 pointer-events-none z-10"
          />
        </div>
      </div>

      <div>
        <label className="label">
          <span className="label-text">電子郵件地址</span>
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="input w-full pl-10 focus:border-2 focus:border-gray-400 focus:ring-0 focus:outline-none placeholder:text-sm text-base"
            required
          />
          <Mail 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 border-gray-500 pointer-events-none z-10"
          />
        </div>
      </div>
      <div>
        <label className="label">
          <span className="label-text">輸入密碼</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="At least 6 characters"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            className="input w-full pl-10 pr-10 focus:border-2 focus:border-gray-400 focus:ring-0 focus:outline-none placeholder:text-sm text-base"
            required
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 border-gray-500 pointer-events-none z-10" />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <Eye className="w-5 h-5" /> : <EyeClosed className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div>
        <label className="label">
          <span className="label-text">再輸入一次密碼</span>
        </label>
        <div className="relative">
          <input
            type={showRePassword ? "text" : "password"}
            name="rePassword"
            placeholder="Re-enter Password"
            value={formData.rePassword}
            onChange={e => setFormData({ ...formData, rePassword: e.target.value })}
            className="input w-full pl-10 pr-10 focus:border-2 focus:border-gray-400 focus:ring-0 focus:outline-none placeholder:text-sm text-base"
            required
          />
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 border-gray-500 pointer-events-none z-10" />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-500"
            onClick={() => setShowRePassword(!showRePassword)}
            tabIndex={-1}
          >
            {showRePassword ? <Eye className="w-5 h-5" /> : <EyeClosed className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={formData.agreement}
          onChange={e => setFormData({ ...formData, agreement: e.target.checked })}
          className="checkbox"
        />
        <span className="text-sm">
          I have read the <Link to="/" className="link link-primary">agreement</Link>
        </span>
      </div>

      <button
        type="submit"
        className="btn w-full btn-primary shadow-none just-text transition-transform duration-100 ease-in-out transform hover:scale-95 active:scale-95 font-normal !text-xs sm:!text-sm"
      >
        註冊
      </button>
      <div className="h-1 sm:h-2 lg:h-4"></div>
      <p className="text-xs text-center"> 
        已經有帳戶了？ <Link to={`/auth/login?redirect=${redirect}`} className="link link-primary no-underline hover:underline">登入</Link>
      </p>
    </form>
  );
};

export default RegisterCard;