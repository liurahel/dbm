import { useState } from "react"
import { Link } from "react-router"
import NavBar from "./Navbar";

function Header({ title, slogan }) {
   const [isOnTouch, setIsOnTouch] = useState(false);
   
   return (
      <header className="h-70 text-center flex flex-col items-center header">
         <NavBar />
         <Link to="/">
            <h2 className="pt-40 pb-5 text-4xl font-bold">
               {title}
            </h2>
         </Link>
      </header>
   );
}

export default Header;