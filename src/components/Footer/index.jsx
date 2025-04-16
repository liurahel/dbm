import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="footer text-[#FBCD5C] py-6">
        <div className="flex w-6xl items-center">
          {/* 描述區塊 */}
          <div className="footer-content">
            <p className="space-x-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>+886-2-1234-1234</span>
            </p>
            <p className="space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>s111219999@stu.ntue.edu.tw</span>
            </p>
          </div>

          {/* 追蹤我們 */}
          <div className="footer-followUs">
            <div className="flex space-x-6 text-3xl">
             
              <FontAwesomeIcon icon={faFacebook} className="text-[#FBCD5C] hover:text-[#FFF9F0] 
              transition-all duration-200 transform hover:scale-125" />
             
              <FontAwesomeIcon icon={faInstagram} className="text-[#FBCD5C] hover:text-[#FFF9F0] 
              transition-all duration-200 transform hover:scale-125" />
            </div>
          </div>
        </div>

          {/* 版權聲明 */}
          <div className="footer-copyRight">
            <hr className="my-4 w-2xl" />
            <p>©不要B我市集</p>
          </div>
      </footer>
    </div>
  );
}