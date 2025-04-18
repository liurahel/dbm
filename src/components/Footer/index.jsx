import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-bg footer-text py-6 w-90%">
        <div className="flex flex-col gap-4 sm:flex-row w-sm sm:w-6xl items-center">
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
          <div className="footer-copyRight">
            <hr className="my-2 mt-5 w-xs sm:w-2xl sm:my-4 hover:text-[#086776]" />
            <span className="text-xs sm:text-sm group">
              ©不要
              <span className="inline-block group-hover:scale-145 group-hover:tracking-widest transition-transform duration-200">B</span>
              我市集
            </span>
          </div>
      </footer>
    </div>
  );
}