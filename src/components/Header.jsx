import { useState } from "react"
import NavBar from "./Navbar";

function Header({ title, slogan }) {
   const [isOnTouch, setIsOnTouch] = useState(false);
   
   return (
      <header className="relative h-60 text-center flex flex-col items-center header header-bg header-text">
         <NavBar />
            <h2 className="pt-35 pb-5 text-4xl font-bold">
               {title}
            </h2>
      </header>
   );
}

export default Header;