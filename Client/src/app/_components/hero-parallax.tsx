"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  const products = [
    {
      id: 1,
      title: "Nelson Mandela",
      link: "https://vi.wikipedia.org/wiki/Nelson_Mandela",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh1.jpg",
    },
    {
      id: 2,
      title: "Nelson Mandela",
      link: "https://vi.wikipedia.org/wiki/Nelson_Mandela",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh2.jpg",
    },
    {
      id: 3,
      title: "Nelson Mandela",
      link: "https://vnexpress.net/nelson-mandela-va-triet-ly-vu-khi-giao-duc-thay-doi-the-gioi-4346990.html",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh7.jpg",
      height: 200,
      weight: 200,
    },

    {
      id: 4,
      title: "Nelson Mandela",
      link: "https://vi.wikipedia.org/wiki/Nelson_Mandela",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh4.jpg",
    },
    {
      id: 5,
      title: "Nelson Mandela",
      link: "https://vi.wikipedia.org/wiki/Nelson_Mandela",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh5.jpg",
    },
    {
      id: 6,
      title: "Nelson Mandela",
      link: "https://vi.wikipedia.org/wiki/Nelson_Mandela",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh6.jpg",
    },
    {
      id: 7,
      title: "Nelson Mandela",
      link: "https://giadungnhaviet.com/cau-chuyen-ve-nguoi-thay-va-chiec-dong-ho/",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh8.jpg",
      height: 200,
      weight: 200,
    },
    {
      id: 8,
      title: "Nelson Mandela",
      link: "https://vi.wikipedia.org/wiki/Nelson_Mandela",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh3.jpg",
    },
    {
      id: 9,
      title: "Nelson Mandela",
      link: "https://www.vietnamplus.vn/infographics-nelson-mandela-bieu-tuong-chong-phan-biet-chung-toc-post514162.vnp",
      thumbnail: "/assets/image/Vai_Tro/Nelson/anh9.jpg",
      height: 1000,
      weight: 1000,
    },
  ].map((product) => ({
    ...product,
    className: "aspect-[3/4] sm:aspect-[4/3] lg:aspect-[16/9]", // Add responsive aspect ratios
  }));

  return (
    <div className="w-full overflow-hidden">
      <HeroParallax products={products} />
    </div>
  );
}
