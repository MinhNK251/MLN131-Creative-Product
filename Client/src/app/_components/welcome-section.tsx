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
    <>
      <SplitText
        text="Sứ mệnh lịch sử của giai cấp công nhân"
        className="text-2xl md:text-2xl lg:text-6xl font-semibold text-center text-white px-4"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <h2 className="text-white my-4 mb-6 italic text-sm md:text-base px-4">
        I. Quan điểm cơ bản chủ nghĩa Mác – Lênin về giai cấp công nhân và sứ mệnh lịch sử thế giới của giai cấp công nhân
      </h2>
      <h3 className="text-white my-4 mb-6 italic text-sm md:text-base px-4">
        Sản phẩm sáng tạo của nhóm 1, môn MLN131-SE1735 trường đại học FPT
      </h3>
      <button
        className="p-[3px] relative hover:scale-105 transition-transform duration-300"
        onClick={handleScrollToContent}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg" />
        <div className="px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          Khám phá ngay
        </div>
      </button>
    </>
  );
}
