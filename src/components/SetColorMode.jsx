import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "lucide-react";
import { selectLightMode, setColorMode } from "../redux/colorSlice";

export default function SetColorMode() {
   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
      if (lightMode) {
         document.documentElement.setAttribute('data-theme', 'dark');
       } else {
         document.documentElement.setAttribute('data-theme', 'light');
       }
   }

   return (
      <div onClick={toggleColor} className="absolute item-center sm:right-5 right-4 cursor-pointer" >
         {
            lightMode ? (
               <Sun className="sm:w-6 sm:h-6 w-8 h-8 text-current group-hover:scale-105 transition-transform" />
            ) : (
               <Moon className="sm:w-6 sm:h-6 w-8 h-8 text-current group-hover:scale-105 transition-transform" /> 
            )
         }
      </div>
   );
}