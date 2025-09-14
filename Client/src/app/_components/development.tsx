// thanks to oliver: https://www.youtube.com/@olivierlarose1

"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { JSX, useRef } from "react";
import Image from "next/image";
const projects = [
  {
    title: "Lao động bằng máy móc, năng suất cao",
    description:
      "Gắn liền với công nghệ hiện đại, công nhân làm việc có năng suất cao, tạo ra khối lượng sản phẩm khổng lồ.",
    link: "/assets/image/Aristotle.jpg",
    color: "#5196fd",
  },
  {
    title: "Tính tổ chức – kỷ luật – hợp tác cao",
    description:
      "Môi trường làm việc trong các nhà máy, xí nghiệp đòi hỏi sự phối hợp chặt chẽ, tuân thủ kỷ luật và tinh thần hợp tác, tạo nên sức mạnh tập thể.",
    link: "/assets/image/ImmanuelKant.jpg",
    color: "#8f89ff",
  },
  {
    title: "Là sản phẩm và chủ thể của nền đại công nghiệp",
    description:
      "Giai cấp công nhân vừa là kết quả của sự phát triển công nghiệp, vừa là lực lượng trực tiếp thúc đẩy sự phát triển đó, đại diện cho lực lượng sản xuất tiên tiến và phương thức sản xuất hiện đại.",
    link: "/assets/image/Jean-Jacques-Rousseau.jpg",
    color: "#4caf50",
  },
  {
    title: "Có tính cách mạng triệt để",
    description:
      "Do địa vị kinh tế – xã hội của mình, họ không có gì để mất ngoài xiềng xích, nên có tinh thần đấu tranh không khoan nhượng, có đủ phẩm chất để lãnh đạo cách mạng xã hội.",
    link: "/assets/image/JohnDewey.jpg",
    color: "#ed649e",
  },
];
export default function DevelopmentSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white min-h-[40vh] w-full bg-slate-950 grid place-content-center px-4">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]">
            Những đặc điểm tạo nên sức mạnh và tiềm năng cách mạng của giai cấp công nhân
          </h1>
        </section>

        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center sticky top-0 px-4 py-8 lg:py-16"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-auto w-full sm:w-[80%] lg:w-[60%] rounded-md p-4 sm:p-6 lg:p-8 origin-top"
      >
        <p className="text-3xl sm:text-3xl text-center font-semibold text-black mb-4">
          {title}
        </p>

        <div className="flex flex-col lg:flex-row h-full gap-4 lg:gap-6">
          <div className="w-full lg:w-[50%] relative flex flex-col justify-between">
            <p className="text-base sm:text-2xl">{description}</p>
          </div>

          <div className="relative w-[300px] aspect-[4/3] rounded-lg overflow-hidden ms-10">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={url || "/placeholder.svg"}
                alt={title}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
