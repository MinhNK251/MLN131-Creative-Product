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
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const items = [
  {
    icon: <Home />,
    title: "💰 Kinh tế",
    desc: 'Giải phóng triệt để lực lượng sản xuất, phát triển sản xuất hiện đại trên cơ sở công hữu về tư liệu sản xuất, tạo tiền đề vật chất – kỹ thuật dồi dào cho một xã hội mới không có đói nghèo và thiếu thốn.',
    sliderName: "Kinh tế",
    src: "/assets/image/conclusion1.jpg",
  },
  {
    icon: <Home />,
    title: "⚖️ Chính trị – Xã hội",
    desc: "Lãnh đạo cách mạng lật đổ ách thống trị của giai cấp tư sản, giành chính quyền về tay nhân dân lao động, thiết lập nhà nước kiểu mới (chuyên chính vô sản) để thực hiện dân chủ, công bằng và tiến bộ xã hội, xây dựng nền dân chủ rộng rãi cho đại đa số.",
    sliderName: "Chính trị – Xã hội",
    src: "/assets/image/conclusion2.jpg",
  },
  {
    icon: <Home />,
    title: "📚 Văn hóa – Tư tưởng",
    desc: "Xây dựng hệ giá trị mới (lao động, công bằng, dân chủ, bình đẳng, tự do) dựa trên nền tảng chủ nghĩa Mác – Lênin, xóa bỏ các tàn dư tư tưởng lạc hậu, phản động, xác lập ý thức hệ khoa học và cách mạng.",
    sliderName: "Văn hóa – Tư tưởng",
    src: "/assets/image/conclusion3.jpg",
  },
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
      <div className="h-[75vh]">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-medium tracking-tight text-transparent"
          >
            Sứ mệnh lịch sử <br/> của giai cấp công nhân
          </motion.h1>
          <div className="max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10 mb-16">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-2xl pt-10">
              Sứ mệnh lịch sử là trách nhiệm mà lịch sử giao phó cho giai cấp công nhân. Đó là trở thành lực lượng tiên phong, thông qua chính đảng tiên phong (Đảng Cộng sản) tổ chức và lãnh đạo nhân dân lao động để xóa bỏ chế độ người bóc lột người, giải phóng toàn nhân loại khỏi mọi áp bức, bóc lột và xây dựng thành công xã hội cộng sản chủ nghĩa.
            </p>
          </div>
        </LampContainer>
      </div>
      <div
        ref={sectionRef}
        className="w-full h-full md:lg:pt-10 lg:pt-10 pt-14 bg-slate-950 overflow-hidden pb-10"
      >        
        <div>
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
        </div>
        

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
