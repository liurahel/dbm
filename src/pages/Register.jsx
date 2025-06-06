import { Helmet } from "react-helmet-async";
import Herder from "../components/Header";
import RegisterCard from "../components/RegisterCard";
import Footer from "../components/Footer";

function Register() {
    
    return (
    <div className="main-layout min-h-screen white-bg">
        <div className="container mx-auto">
            <Helmet>
                <title>不要B我市集 | 註冊</title>
            </Helmet>
            <Herder 
                title="註冊"
                className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold"
            />
            <RegisterCard/>
        </div>
        <Footer />
    </div>  
  );
}

export default Register;