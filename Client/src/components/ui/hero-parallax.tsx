"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);
  const thirdRow = products.slice(4, 6);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [1, 2], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 0.2]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-full overflow-hidden antialiased relative flex flex-row self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="w-1/2 flex items-center">
        <Header />
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          // translateY,
          opacity,
        }}
        className="w-1/2 md:pe-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-6xl font-bold text-black">
        Giai cấp công nhân trong thời đại công nghệ số
      </h1>

      <p className="max-w-3xl text-base md:text-xl mt-8 text-black leading-relaxed">
        Trong thời đại công nghệ số, với sự bùng nổ của cuộc cách mạng công nghiệp 4.0, 
        các công nghệ như trí tuệ nhân tạo (AI), robot, tự động hóa, Internet of Things (IoT) 
        đang làm thay đổi sâu sắc phương thức sản xuất trên phạm vi toàn cầu. 
        Mặc dù một số công việc tay chân, lặp đi lặp lại có nguy cơ bị thay thế, 
        nhưng giai cấp công nhân không hề biến mất mà đang biến đổi mạnh mẽ về cơ cấu, trình độ và vai trò:
        <br /><br />
        • <strong>Chuyển đổi từ lao động cơ bắp sang lao động tri thức – kỹ thuật cao</strong>: 
        Xuất hiện các loại hình công nhân mới như công nhân công nghệ thông tin, kỹ sư phần mềm, 
        kỹ thuật viên vận hành hệ thống tự động hóa, chuyên gia dữ liệu...
        <br />
        • <strong>Giữ vai trò then chốt trong lực lượng sản xuất hiện đại</strong>: 
        Máy móc và AI vẫn cần con người thiết kế, lập trình, giám sát, vận hành và bảo trì.
        <br />
        • <strong>Lực lượng tiên phong trong chuyển đổi số và đổi mới sáng tạo</strong>: 
        Giai cấp công nhân hiện đại góp phần thúc đẩy quá trình số hóa, 
        tạo ra sản phẩm – dịch vụ tiên tiến, góp phần phát triển bền vững.
        <br /><br />
        Quan điểm Mác – Lênin về vai trò lịch sử của giai cấp công nhân vẫn còn nguyên giá trị cốt lõi, 
        nhưng phương thức thực hiện sứ mệnh của họ đã thay đổi, đòi hỏi sự nâng cấp về trí tuệ, kỹ năng và khả năng thích ứng.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-60 w-64 relative flex-shrink-0"
    >
      <Link
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
