import './footer.css';

export default function Footer() {
  return (
    <div>
      {/* 分隔線 */}
      <hr className="my-6 w-full border-t-2 border-primary rounded-sm opacity-100" />

      <footer className="footer text-[#FBCD5C] py-6">
        
        <div className="flex w-6xl items-center">
          {/* 描述區塊 */}
          <div className="footer-content">
            <p>+886-2-1234-1234</p>
            <p>s111219999@stu.ntue.edu.tw</p>
          </div>

          {/* 追蹤我們 */}
          <div className="footer-followUs">
            <p className="font-extrabold">FOLLOW US</p>
            <div className="flex space-x-4">
              <a href="#">
                <img className="w-8 h-8" src="/images/nn-icon-instagram.svg" alt="instagram" />
              </a>
              <a href="#">
                <img className="w-8 h-8" src="/images/nn-icon-instagram.svg" alt="instagram" />
              </a>
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