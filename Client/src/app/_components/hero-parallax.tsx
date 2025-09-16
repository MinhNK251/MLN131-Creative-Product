"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  const products = [
    {
      id: 1,
      title: "Quốc tế lao động",
      thumbnail: "/assets/image/cong-nhan-1.jpg",
    },
    {
      id: 2,
      title: "Công nhân công nghệ",
      thumbnail: "/assets/image/cong-nhan-2.jpg",
    },
    {
      id: 3,
      title: "Công nhân điều khiển",
      thumbnail: "/assets/image/cong-nhan-3.jpg",
      height: 200,
      weight: 200,
    },

    {
      id: 4,
      title: "Xưởng dệt may",
      thumbnail: "/assets/image/cong-nhan-4.jpg",
    },
    {
      id: 5,
      title: "Những công nhân công trường",
      thumbnail: "/assets/image/cong-nhan-5.jpg",
    },
    {
      id: 6,
      title: "Công nghệ 4.0",
      thumbnail: "/assets/image/cong-nhan-6.jpg",
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
