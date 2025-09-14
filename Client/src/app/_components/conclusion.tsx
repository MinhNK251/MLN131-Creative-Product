/* eslint-disable */

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ProgressSlider,
  SliderBtnGroup,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progress-slider";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Home } from "lucide-react";

const items = [
  {
    icon: <Home />,
    title: "🎨 Con người là chủ thể sáng tạo",
    desc: 'Con người không chỉ là đối tượng tiếp thu, mà là chủ thể tạo ra giá trị. Việc "trồng người" là sự đầu tư vào trí tuệ, phẩm chất và năng lực để giúp họ có thể đóng góp cho sự phát triển xã hội lâu dài.',
    sliderName: "Con người là chủ thể sáng tạo",
    src: "/assets/image/conclusion1.jpg",
  },
  {
    icon: <Home />,
    title: "🚀 Vai trò quyết định của con người đối với sự phát triển xã hội",
    desc: "Con người là động lực chính trong các tiến bộ về khoa học, công nghệ và văn hóa. Một xã hội thịnh vượng không thể thiếu con người được phát triển đầy đủ về năng lực và đạo đức.",
    sliderName: "Vai trò quyết định của con người đối với sự phát triển xã hội",
    src: "/assets/image/conclusion2.jpg",
  },
  {
    icon: <Home />,
    title: "🌱 Phát triển con người trong thời đại mới",
    desc: "Đầu tư giáo dục, khuyến khích sáng tạo, và xây dựng môi trường lành mạnh là nền tảng giúp con người phát triển toàn diện, thúc đẩy xã hội bền vững.",
    sliderName: "Phát triển con người trong thời đại mới",
    src: "/assets/image/conclusion3.jpg",
  },
  {
    icon: <Home />,
    title: "🌍 Con người và sự phát triển bền vững",
    sliderName: "Con người và sự phát triển bền vững",
    desc: "Con người là yếu tố quyết định trong việc bảo vệ môi trường và thúc đẩy công bằng xã hội, góp phần xây dựng một thế giới công bằng và bền vững.",
    src: "/assets/image/conclusion5.jpg",
  },
  // {
  //   icon: <Home />,
  //   title: "🔑 Tổng kết",
  //   sliderName: "Tổng kết",
  //   desc: 'Tóm lại, "trồng người" không chỉ mang lại lợi ích ngay lập tức mà còn tạo dựng nền tảng cho sự thịnh vượng lâu dài, góp phần xây dựng một xã hội vững mạnh và bền vững trong tương lai.',
  //   src: "/assets/image/conclusion4.jpg",
  // },
];

export default function ConclusionSection() {
  const isMobile = useMediaQuery("(min-width: 640px)");
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlider, setActiveSlider] = useState(items[0].sliderName);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setActiveSlider(items[0].sliderName);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="text-white min-h-screen w-full bg-slate-950 grid place-content-center relative px-4 py-8 md:py-12">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-semibold text-center tracking-tight leading-[120%] text-green-500">
            &quot;Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng
            người&quot;
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-semibold text-center tracking-tight leading-[120%]">
            Dưới đây là quan điểm của nhóm! 👇
          </h2>
        </div>
      </div>
      <div
        ref={sectionRef}
        className="w-full h-full md:lg:pt-10 lg:pt-10 pt-14 bg-slate-950 overflow-hidden"
      >
        <ProgressSlider
          vertical={isMobile}
          fastDuration={300}
          duration={4000}
          activeSlider={activeSlider}
          className="flex flex-col md:flex-row h-full"
        >
          {/* Content Section */}
          <SliderBtnGroup className="relative w-full md:w-1/2 z-10 flex flex-col h-[75vh] md:h-full bg-slate-950/95 backdrop-blur-md overflow-y-auto">
            {items.map((item, index) => (
              <SliderBtn
                key={index}
                value={item?.sliderName}
                className="text-left p-4 md:p-6 border-b border-slate-800 flex-none h-[25%] md:h-1/4 relative group hover:bg-slate-900/50 transition-colors"
                progressBarClass="left-0 top-0 bg-white w-1 md:w-2 h-full before:h-full before:w-2 md:before:w-3 before:bg-white"
              >
                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/50 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded bg-white text-black mb-3 md:mb-4 text-sm md:text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-slate-200 line-clamp-3 md:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
              </SliderBtn>
            ))}
          </SliderBtnGroup>

          {/* Image Section */}
          <SliderContent className="hidden  w-full md:w-3/6 lg:flex md:flex flex-col h-[40vh] md:h-full">
            {items.map((item, index) => (
              <SliderWrapper
                className="h-full w-full"
                key={index}
                value={item?.sliderName}
              >
                <Image
                  className="h-full w-full object-cover"
                  src={item?.src || "/placeholder.svg"}
                  width={1900}
                  height={1080}
                  alt={item.sliderName}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SliderWrapper>
            ))}
          </SliderContent>
        </ProgressSlider>

        {/* Mobile Navigation Indicator */}
        <div className="hidden md:hidden fixed bottom-4 left-1/2 -translate-x-1/2  gap-2 z-20">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeSlider === item.sliderName ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
