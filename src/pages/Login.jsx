import { Helmet } from "react-helmet-async";
import Herder from "../components/Header";
import LoginCard from "../components/LoginCard";
import Footer from "../components/Footer";

function Login() {
    
    return (
    <div className="main-layout min-h-screen white-bg">
        <div className="container mx-auto">
            <Helmet>
                <title>不要B我市集 | 登入</title>
            </Helmet>
            <Herder 
                title="登入"
                className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
            />
            <LoginCard/>
        </div>
        <Footer />
    </div>  
  );
}

export default Login;