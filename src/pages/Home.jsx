import Header from "../components/Header";
import Footer from "../components/Footer/index";
import Dbm from "../components/Dbm";

function Home() {

    return (
      <div className="container mx-auto main-layout bg-[#FFF9F0] min-h-screen">
        <Header 
          title="不要B我市集"
        />
        <Dbm className="content" />
        <Footer className="footer" />
      </div>
    )
  }
  
  export default Home;