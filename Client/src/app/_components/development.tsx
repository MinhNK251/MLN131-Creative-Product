// thanks to oliver: https://www.youtube.com/@olivierlarose1

"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { JSX, useRef } from "react";
import Image from "next/image";
const projects = [
  {
    title: "Aristotle (384 - 322 BC)",
    description:
      "Aristotle từng nói: 'Giáo dục là trang bị công cụ cho tâm hồn.' Theo ông, giáo dục không chỉ là việc truyền đạt kiến thức mà còn là sự rèn luyện đạo đức và lý trí, giúp con người hướng đến eudaimonia (hạnh phúc tối thượng). Ông nhấn mạnh rằng, con người là zoon politikon (sinh vật chính trị), nghĩa là con người chỉ thực sự phát triển trong một cộng đồng.",
    src: "https://vi.wikipedia.org/wiki/Aristoteles",
    link: "/assets/image/Aristotle.jpg",
    color: "#5196fd",
  },
  {
    title: "Immanuel Kant (1724 - 1804)",
    description:
      "Immanuel Kant khẳng định: “Con người là cứu cánh, chứ không phải phương tiện.” Tư tưởng này phản ánh quan điểm đạo đức học của Kant, nơi con người được xem là mục đích cuối cùng, và mọi hành động phải xuất phát từ sự tôn trọng phẩm giá và tự do của họ. Kant nhấn mạnh rằng sự phát triển con người phải bao gồm cả tri thức lẫn đạo đức để xây dựng một xã hội bền vững.",
    src: "https://vi.wikipedia.org/wiki/Immanuel_Kant",
    link: "/assets/image/ImmanuelKant.jpg",
    color: "#8f89ff",
  },
  {
    title: "Jean-Jacques Rousseau (1712 - 1778)",
    description:
      "Jean-Jacques Rousseau với câu nói nổi tiếng: “Con người sinh ra tự do, nhưng ở đâu cũng bị trói buộc.” Ông chỉ ra rằng tự do tự nhiên của con người bị giới hạn bởi các thiết chế xã hội, và để giải phóng khỏi những ràng buộc này, con người cần được giáo dục và khai sáng, vượt qua định kiến và tư duy hạn hẹp.",
    src: "https://vi.wikipedia.org/wiki/Jean-Jacques_Rousseau",
    link: "/assets/image/Jean-Jacques-Rousseau.jpg",
    color: "#4caf50",
  },
  {
    title: "John Dewey (1859 – 1952)",
    description:
      "John Dewey khẳng định: “Giáo dục không phải là chuẩn bị cho cuộc sống mà là cuộc sống.” Theo ông, giáo dục không chỉ là việc tiếp thu kiến thức mà còn là sự phát triển tư duy phản biện và khả năng giải quyết vấn đề trong thực tiễn. Dewey nhấn mạnh rằng giáo dục phải kết hợp lý thuyết với thực hành, giúp con người trưởng thành và phát triển trong một xã hội dân chủ.",
    src: "https://vi.wikipedia.org/wiki/John_Dewey",
    link: "/assets/image/JohnDewey.jpg",
    color: "#ed649e",
  },
  {
    title: "Albert Einstein (1879 – 1955)",
    description:
      "Albert Einstein từng nói: “Giáo dục là điều còn lại sau khi chúng ta đã quên hết những gì đã học trong trường.” Ông cho rằng giáo dục không chỉ là sự tích lũy kiến thức mà là phát triển khả năng tư duy sáng tạo và đặt câu hỏi. Einstein tin rằng con người cần được giáo dục để không chỉ hiểu biết mà còn phát triển tư duy độc lập và phản biện.",
    src: "https://vi.wikipedia.org/wiki/Albert_Einstein",
    link: "/assets/image/AlbertEinstein.jpg",
    color: "#fd521a",
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
        <section className="text-white min-h-[70vh] w-full bg-slate-950 grid place-content-center px-4">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]">
            Triết học qua lời các nhà tư tưởng vĩ đại. <br /> Khám phá ngay! 👇
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
  src: string;
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
  src,
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
        className="flex flex-col relative -top-[25%] h-auto w-full sm:w-[90%] lg:w-[70%] rounded-md p-4 sm:p-6 lg:p-8 origin-top"
      >
        <h2 className="text-xl sm:text-2xl text-center font-semibold text-black mb-4">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row h-full gap-4 lg:gap-6">
          <div className="w-full lg:w-[40%] relative flex flex-col justify-between">
            <p className="text-base sm:text-xl">{description}</p>
            <span className="flex items-center gap-2 pt-4">
              <a
                href={src}
                target="_blank"
                className="underline cursor-pointer hover:text-blue-900 text-sm sm:text-base"
                rel="noreferrer"
              >
                Xem chi tiết thông tin về nhà Triết Học
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-full lg:w-[60%] aspect-[4/3] lg:aspect-[16/9] rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={url || "/placeholder.svg"}
                alt={title}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
