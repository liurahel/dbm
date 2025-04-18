import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-bg footer-text py-6 w-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:gap-200  sm:flex-row items-center justify-betweenr">
          {/* 描述區塊 */}
          <div className="sm:mr-auto">
            <div className="space-x-2">
              <FontAwesomeIcon icon={faPhone} className="hover:rotate-45" />
              <span className="text-xs sm:text-sm">+886-2-1234-1234</span>
            </div>
            <div className="h-1 sm:h-2"></div>

            <div className="group inline-flex items-center space-x-2 cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} className="hover:rotate-45" />
              <span className="text-xs sm:text-sm group-hover:text-[#f8eacc]">s111219999@stu.ntue.edu.tw</span>
            </div>
          </div>

          {/* 追蹤我們 */}
          <div className="footer-followUs">
            <div className="flex space-x-6 text-3xl">
             
              <FontAwesomeIcon icon={faFacebook} className=" hover:text-[#FFF9F0] 
              transition-all duration-200 transform hover:scale-125" />
             
              <FontAwesomeIcon icon={faInstagram} className=" hover:text-[#FFF9F0] 
              transition-all duration-200 transform hover:scale-125" />
              
            </div>
          </div>
        </div>

          {/* 版權聲明 */}
          <div className="w-full px-4">
            <div className="max-w-5xl mx-auto text-center">
              <hr className="my-2 mt-5 w-xs sm:w-2xl sm:my-4 icon-text mx-auto hover:text-[#086776]" />
              <span className="text-xs sm:text-sm group">
                ©不要
                <span className="inline-block group-hover:scale-125 group-hover:tracking-widest transition-transform duration-200">B</span>
                我市集
              </span>
            </div>
          </div>
          
      </footer>
    </div>
  );
}