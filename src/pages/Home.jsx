import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import Dbm from "../components/Dbm";

function Home() {

    return (
      <div className="container mx-auto main-layout bg-[#FFF9F0] min-h-screen flex flex-col items-center">
        <div className="flex flex-col items-center">
        <Navbar />
        <img
        src="/images/視覺圖_light.svg"
        alt="不要B我市集"
        className="w-full h-auto"
        />
        </div>
        
        <Dbm className="content" />
        <Footer className="footer" />
      </div>
    )
  }
  
  export default Home;