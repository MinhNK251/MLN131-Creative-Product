"use client";

import { ReactLenis } from "lenis/react";
import type { JSX } from "react";

export default function OpinionSection(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white min-h-screen w-full bg-slate-950 flex items-center justify-center sticky top-0 px-4 py-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center gap-8 lg:gap-12">
              <blockquote className="lg:w-[58.33%] text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-medium text-left leading-relaxed tracking-wide">
                <p className="mb-6">
                  🌱 Câu nói{" "}
                  <span className="text-green-500 font-semibold">
                    &quot;Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm
                    trồng người&quot;
                  </span>{" "}
                  hàm chứa một triết lý sâu sắc về mối quan hệ giữa con người và
                  sự phát triển bền vững của xã hội. ✅
                </p>
                <p>
                  🤔 Từ góc nhìn triết học, con người không chỉ là cá thể sinh
                  học mà còn là chủ thể xã hội, có ý thức, giá trị và tiềm năng
                  phát triển vượt bậc. 🌟 Việc &quot;trồng người&quot; chính là
                  đầu tư vào giáo dục, đạo đức, và sự phát triển toàn diện của
                  con người để xây dựng một xã hội tiến bộ, công bằng và nhân
                  văn.
                </p>
              </blockquote>

              <img
                src="/assets/image/cau mo dau.jpg"
                alt="Philosophy Illustration"
                className="w-full lg:w-[41.67%] rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>

        <section className="text-white w-full bg-slate-950">
          <div className="flex flex-col lg:flex-row px-4 lg:px-16 max-w-7xl mx-auto">
            <div className="lg:sticky lg:top-0 lg:h-screen grid place-content-center w-full lg:w-1/2 py-8 lg:py-0">
              <p className="text-lg sm:text-xl lg:text-2xl px-0 lg:px-8 font-medium text-left tracking-tight leading-relaxed">
                <span className="font-bold">🌟 Con người</span>, trong triết
                học, là thực thể trung tâm với giá trị vượt thời gian, đóng vai
                trò quan trọng trong mọi lĩnh vực.
                <span className="font-bold">💡 Triết học</span> khám phá bản
                chất con người qua:
                <br />
                <span className="font-bold">- 🧠 Tự do cá nhân</span>
                <br />
                <span className="font-bold">- 🌈 Trách nhiệm xã hội</span>
                <br />
                <span className="font-bold">- 📚 Giáo dục</span>
                <br />
                <span className="font-bold">- ⚒️ Lao động</span>
                <br />
                Những khái niệm cơ bản này giúp định hình tư duy và hành động
                của xã hội.
              </p>
            </div>

            <div className="grid gap-8 w-full lg:w-1/2 py-8 lg:py-0">
              {[
                {
                  bg: "bg-green-500",
                  rotate: "rotate-6",
                  title: "🌱 Con người là một thực thể tự do",
                  image: "phantich1.jpg",
                },
                {
                  bg: "bg-red-400",
                  rotate: "-rotate-6",
                  title: "🔥 Con người là cứu cánh, không phải phương tiện",
                  image: "phantich2.jpg",
                },
                {
                  bg: "bg-orange-400",
                  rotate: "rotate-5",
                  title:
                    "📚 Giáo dục là công cụ để phát triển bản chất con người",
                  image: "phantich3.jpg",
                },
                {
                  bg: "bg-blue-400",
                  rotate: "-rotate-5",
                  title: "🌍 Con người là sinh vật chính trị và sáng tạo",
                  image: "phantich4.jpg",
                },
                {
                  bg: "bg-purple-400",
                  rotate: "rotate-6",
                  title:
                    "🌟 Phát triển con người gắn liền với sự phát triển xã hội",
                  image: "phantich5.jpg",
                },

                // ... Thêm các phần tử khác tương tự
              ].map((item, index) => (
                <figure
                  key={index}
                  className="lg:sticky lg:top-0 lg:h-screen grid place-content-center"
                >
                  <article
                    className={`${item.bg} h-auto sm:h-[400px] w-full sm:w-[40rem] rounded-lg ${item.rotate} p-4 flex flex-col items-center gap-4`}
                  >
                    <h2 className="text-lg sm:text-xl font-semibold text-center flex items-center gap-2 whitespace-normal sm:whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.title}
                    </h2>
                    <img
                      src={`/assets/image/${item.image}`}
                      alt={item.title}
                      className="h-[200px] sm:h-[300px] w-full sm:w-[550px] rounded-lg object-cover"
                    />
                  </article>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
