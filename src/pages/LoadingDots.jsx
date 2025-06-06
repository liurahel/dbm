import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";

export default function LoadingDots({ onFinish }) {
  const dotsRef = useRef([]);

  useEffect(() => {
    const controls = animate(
      dotsRef.current,
      { y: -30 },
      {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        times: [0, 0.5, 1],
        delay: stagger(0.2, { startDelay: -0.5 }),
      }
    );

    // 模擬資料載入完成後結束動畫
    const timeout = setTimeout(() => {
      controls.stop();
      onFinish();
    }, 3000); // 3 秒後跳轉

    return () => {
      clearTimeout(timeout);
      controls.stop();
    };
  }, [onFinish]);

  const dotColors = ["#854D8E", "#FBCD5C", "#000000"];

  return (
    <div className="w-screen h-screen flex justify-center items-center content-bf">
      <div className="flex gap-3">
        {dotColors.map((color, i) => (
          <div
            key={i}
            style={{ backgroundColor: color }}
            className="w-5 h-5 rounded-full"
            ref={(el) => (dotsRef.current[i] = el)}
          ></div>
        ))}
      </div>
    </div>
  );
}
