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
              <div>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">數位二甲 111219036 施亞蝶</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">數位二甲 111219035 劉恩伶</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">113學年第二學期</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">跨平台前端工程設計 期末專題</p>
              </div>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-sm sm:text-base">攤位相關</h4>
              <div>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">報名方式</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">注意事項</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">收費制度</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">攤位地圖</p>
              </div>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-sm sm:text-base">常見問題</h4>
              <div>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">訊息公告</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">退貨政策</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">訂單查詢</p>
                <p className="text-xs sm:text-sm !mb-0 leading-loose hover:text-[#f8eacc]">服務條款</p>
              </div>
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
            <hr className="mb-2 mt-6 w-xs sm:w-5xl sm:mb-4 sm:mt-8 icon-text mx-auto" /> 
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