import React from "react";
import SplitText from "@/components/ui/SplitText";

export default function WelcomeSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  
  const handleScrollToContent = () => {
    const contentSection = document.getElementById("analysis");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <SplitText
          text="Sứ mệnh lịch sử của giai cấp công nhân"
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-white px-4 bg-black/30 backdrop-blur-sm py-3 rounded-lg border border-white/10"
          delay={30}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        
        <h2 className="text-white my-6 text-lg md:text-xl font-medium px-4 text-center bg-black/30 backdrop-blur-sm py-3 rounded-lg max-w-3xl border border-white/10">
          <b>I. Quan điểm cơ bản chủ nghĩa Mác – Lênin về giai cấp công nhân và sứ mệnh lịch sử thế giới của giai cấp công nhân</b>
        </h2>
        
        <h3 className="text-white my-4 text-base md:text-lg px-4 text-center bg-black/30 backdrop-blur-sm py-2 rounded-lg max-w-3xl border border-white/10">
          <b>Sản phẩm sáng tạo của nhóm 1, môn MLN131-SE1735 trường đại học FPT</b>
        </h3>
        
        <button
          className="p-[3px] relative mt-8 hover:scale-105 transition-transform duration-300 group"
          onClick={handleScrollToContent}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg group-hover:from-blue-600 group-hover:to-green-600 transition-colors" />
          <div className="px-8 md:px-10 py-3 bg-black/90 rounded-[6px] relative text-white font-medium text-lg hover:bg-transparent transition-colors shadow-lg">
            Khám phá ngay
          </div>
        </button>
      </div>
    </div>
  );
}