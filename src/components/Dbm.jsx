import React from 'react';


function Dbm() {
  return (
    <>
    <div className="flex flex-col items-center content !mb-0 w-full max-w-screen-lg mx-auto">

      {/* 給喜歡圖文創作的你 */}
      <h1 className="text-[#1A1A1A] text-3xl font-bold">給喜歡圖文創作的你</h1>
      <div className="flex items-center gap-3 text-left self-start mt-10 mb-4">
            <div className="w-4 h-7 bg-[#854D8E] rounded-tl-lg rounded-bl-lg"></div>
            <h2 className="text-[#1A1A1A] text-2xl font-normal">開心，是我們所願。</h2>
      </div>
      <div className="flex justify-between items-start gap-6 w-full">
        <span className="text-[#2B2B2B] leading-relaxed mb-0">
          嘿～不要逼我長大、不要逼我上班、不要逼我放棄創作，<br />這是一個為「開心」而生的圖文創作市集。<br />
          我們相信，創作不該被逼，也相信，市集是快樂的，不是只有擺攤賣東西而已。<br />
          來這裡的創作者，可以自在畫自己想畫的、說自己想說的。<br />
          來逛市集的人，也可以放下包袱，開心地看展、翻書、聊天、亂笑。<br /><br />
          「不要B我市集」以插畫、圖文創作為主軸，也可能會混一點點我們想嘗試的新玩法。<br />
          這裡沒有一定要怎樣，只希望：<br />來的人開心，創作者也能在合作中笑著說真話。<br /><br />
          我們是不要B我是說話直、但會陪你討論的那種主辦。<br />
          我們很認真想辦一場大家都能「快樂做自己」的市集，<br /><br />你，要不要來玩？
        </span>
        <img src="/images/LOGO homepage.ver.png" alt="不要B我LOGO"
        className="h-96 w-auto" />
      </div>            

      {/* 本次市集 */}
      <span className="text-[#1A1A1A] mt-20 mb-10 text-3xl font-bold">本次市集</span> 
      <div className="bg-[#854D8E] rounded-lg flex w-full h-25 px-25 items-center">
        <span className="text-[#FFFFFF] text-2xl font-bold mr-auto">實體攤位時間：2025年7月18日(五) - 7月20日(日)</span>
        <span className="text-[#FFFFFF] text-2xl font-bold">＞更多資訊</span>
      </div>    
      <div className="h-1 sm:h-2 lg:h-3"></div>
      <div className="bg-[#FFFFFF] rounded-lg flex w-full h-25 px-25 items-center">
        <span className="text-[#854D8E] text-2xl font-bold mr-auto">線上市集時間：2025年7月21日(一) - 8月21日(四)</span>
        <span className="text-[#854D8E] text-2xl font-bold">＞線上市集</span>
      </div>     
      <div className="h-2 sm:h-4 lg:h-8"></div>
      <div className="bg-[#854D8E] rounded-lg flex w-35 h-15 items-center justify-center">
        <span className="text-[#FFFFFF] text-2xl font-bold">攤位名單</span>
      </div>     

      {/* 交通指引 */}        
      <span className="text-[#1A1A1A] mt-20 mb-5 text-3xl font-bold">交通指引</span> 
      <p className="text-[#2B2B2B] leading-relaxed">
        地址：106台北市大安區和平東路二段134號
      </p>
    </div>
    
    <img src="/images/map.png" alt="地圖" className="w-full h-auto" />

    <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black bg-[#FFF9F0] text-[#2B2B2B] p-4">
      {/* MRT */}
      <ul className="px-4 pb-4 md:pb-0 flex pt-5">
        <ul className="flex text-center items-center font-bold text-[#854D8E] text-6xl leading-none tracking-widest mr-2">
          <li>M<br />R<br />T</li>
        </ul>
        <ul className="flex justify-center">
          <ul>
            <li className="text-[#FFF9F0] bg-[#854D8E] font-bold px-2 py-1 inline-block mb-10">
              捷運文湖線 BR
            </li>
            <li className="text-[#2B2B2B] leading-relaxed">
              科技大樓站出口<br />
              行至和平東路左轉約1分鐘<br />
              即可到達
            </li>
          </ul>
        </ul>
      </ul>

      {/* BUS */}
      <ul className="px-4 pb-4 md:pb-0 flex pt-5">
        <ul className="flex text-center items-center font-bold text-[#854D8E] text-6xl leading-none tracking-widest mr-2">
          <li>B<br />U<br />S</li>
        </ul>
        <ul className="flex justify-center">
          <ul>
            <li className="text-[#FFF9F0] bg-[#854D8E] font-bold px-2 py-1 inline-block mb-1">
              國立臺北教育大學站
            </li>
            <li>237、295、紅57、復興幹線</li>

            <li className="h-2"></li>
           
            <li className="text-[#FFF9F0] bg-[#854D8E] font-bold px-2 py-1 inline-block mb-1">
              復興南路口站
            </li>
            <li>
              18、52、72、207、211、235、278、278(區間車)、284、568、662、663、680、685、688、和平幹線
            </li>
          </ul>
        </ul>
      </ul>

      {/* CAR */}
      <ul className="px-4 pb-4 md:pb-0 flex items-start pt-5">
        <ul className="flex items-center justify-center">
          <ul className="flex text-center font-bold text-[#854D8E] text-6xl leading-none tracking-widest mr-2">
            <li>C<br />A<br />R</li>
          </ul>
          <ul>
            <li className="text-[#FFF9F0] bg-[#854D8E] font-bold px-2 py-1 inline-block mb-1">
              中山高
            </li>
            <li>圓山交流道下→建國南北快速道路→左轉和平東路→國立臺北教育大學</li>
            
            <li className="h-2"></li>

            <li className="text-[#FFF9F0] bg-[#854D8E] font-bold px-2 py-1 inline-block mb-1">
            北二高
            </li>
            <li>木柵交流道下→辛亥路→右轉復興南路→右轉和平東路→國立臺北教育大學</li>
          </ul>
        </ul>
      </ul>

      {/* U-BIKE */}
      <div className="px-4 pb-4 md:pb-0 flex items-start pt-5">
        <div className="text-center w-full">
          <ul className="font-bold text-[#854D8E] text-6xl leading-none tracking-widest mb-4">
            U-BIKE
          </ul>

          <ul className="grid gap-2 w-full">
            <li className="justify-self-center text-[#FFF9F0] bg-[#854D8E] font-bold w-32 px-2 py-1">
              校門
            </li>
            <li className="justify-self-start text-[#FFF9F0] bg-[#854D8E] font-bold w-32 px-2 py-1">
              西側
            </li>
            <li className="justify-self-end text-[#FFF9F0] bg-[#854D8E] font-bold w-32 px-2 py-1">
              東側
            </li>
          </ul>
        </div>
      </div>


    </div>
    </>
  );
}

export default Dbm;