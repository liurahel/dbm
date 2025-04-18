import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import Dbm from "../components/Dbm";
import { Helmet } from 'react-helmet-async';

function Home() {
    return (
      <div className="container mx-auto main-layout content-text content-bf min-h-screen flex flex-col items-center ">
        <Helmet>
          <title>不要B我市集 | 首頁</title>
        </Helmet>
        <div className="flex flex-col items-center">
          <Navbar />
          <div className="theme-bg w-full h-155 bg-cover bg-center"></div>
        </div>
        
        <Dbm className="content " />
        <Footer className="footer" />
      </div>
    )
  }
  
  export default Home;