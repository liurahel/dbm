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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pr-40 sm:gap-6 sm:p-0 max-w-screen-xl mx-auto">{/*sm:px-4 pb-5 border-b-1*/}
          <div>
            <h4 className="font-bold mb-2 text-sm sm:text-base">不要B我市集</h4>
              <p className="text-xs sm:text-sm m-0 leading-relaxed">數位二甲 111219036 施亞蝶<br></br>數位二甲 111219035 劉恩伶<br></br>113學年第二學期<br></br>跨平台前端工程設計 期末專題</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-sm sm:text-base">攤位相關</h4>
              <p className="text-xs sm:text-sm m-0 leading-relaxed">報名方式<br></br>注意事項<br></br>收費制度<br></br>攤位地圖</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-sm sm:text-base">常見問題</h4>
              <p className="text-xs sm:text-sm m-0 leading-relaxed">訊息公告<br></br>退貨政策<br></br>訂單查詢<br></br>服務條款</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-sm sm:text-base">聯絡資訊</h4>
            <div className="sm:mr-auto mb-4">
              <div className="group items-center space-x-2 cursor-pointer">
                <FontAwesomeIcon icon={faPhone} className="hover:rotate-45" />
                <span className="text-xs sm:text-sm group-hover:text-[#f8eacc]">+886-2-1234-1234</span>
              </div>
              <div className="h-0 sm:h-0.5"></div>
              <div className="group inline-flex items-center space-x-2 cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} className="hover:rotate-45" />
                <span className="text-xs sm:text-sm group-hover:text-[#f8eacc]">s111219999@stu.ntue.edu.tw</span>
              </div>
            </div>
            <h4 className="font-bold mb-2 text-sm sm:text-base">社群媒體</h4>
            <div className="flex space-x-6 text-3xl">
              <FontAwesomeIcon icon={faFacebook} className=" hover:text-[#FFF9F0] 
              transition-all duration-200 transform hover:scale-125" />
              <FontAwesomeIcon icon={faInstagram} className=" hover:text-[#FFF9F0] 
              transition-all duration-200 transform hover:scale-125" />
            </div>
          </div>
        </div>
        {/* 版權 */}
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto text-center">
            <hr className="my-2 mt-5 w-xs sm:w-5xl sm:my-4 icon-text mx-auto" /> 
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