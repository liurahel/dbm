import { useState } from "react";
import { Link } from 'react-router-dom';
import { User, Lock, Eye, EyeClosed } from "lucide-react";
/*import { FormInput, FormError, AuthFormLayout } from "@/components/common";*/
import { auth } from "../api/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const LoginCard = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get("redirect"); // 從網址拿參數
    const isRemember = false;
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        agreement: false,
    });

    /*const onChange = (e) => {};*/
    const onFinish = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
        );
        alert("登入成功！");
        navigate(redirect || "/");
    } catch (error) {
        alert("登入失敗：" + error.message);
    }
    };
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form
            onSubmit={onFinish}
            className="p-6 mx-auto w-[500px] space-y-4 content"
        >
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
                    <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 border-gray-500 pointer-events-none z-10"
                    />
                </div>
            </div>
             <div>
                <label className="label">
                    <span className="label-text">密碼</span>
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

            <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={formData.agreement}
                        onChange={e => setFormData({ ...formData, agreement: e.target.checked })}
                        className="checkbox"
                    />
                    <span className="label-text">記住我</span>
                </label>
                <Link to={`/auth/register?redirect=${redirect}`} className="link  link-primary no-underline hover:underline text-xs">忘記密碼？</Link>
            </div>

            <button
                type="submit"
                className="btn w-full btn-primary shadow-none just-text transition-transform duration-100 ease-in-out transform hover:scale-95 active:scale-95 font-normal !text-xs sm:!text-sm"
                /* disabled={false} */
            >
                登入
            </button>
            <div className="h-1 sm:h-2 lg:h-4"></div>
            <p className="text-xs text-center"> 
                還沒有帳戶？ <Link to={`/auth/register?redirect=${redirect}`} className="link link-primary no-underline hover:underline">註冊</Link>
            </p>
        </form>
    );
};

export default LoginCard;