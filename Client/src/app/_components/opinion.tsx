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
                  🏭 Theo{" "}
                  <span className="text-green-500 font-semibold">
                    chủ nghĩa Mác – Lênin
                  </span>
                  , giai cấp công nhân là một tập đoàn xã hội đặc thù, hình
                  thành và phát triển gắn liền với sự ra đời và lớn mạnh của nền
                  công nghiệp hiện đại.
                </p>
                <p>
                  ⚒️ Họ sử dụng máy móc, công nghệ tiên tiến để sản xuất ra của
                  cải vật chất, đặc biệt là các sản phẩm công nghiệp, đóng vai
                  trò chủ đạo trong nền kinh tế. Tuy nhiên, khác với giai cấp tư
                  sản, công nhân không có quyền sở hữu đối với nhà máy, xí
                  nghiệp mà buộc phải bán sức lao động để mưu sinh.
                </p>
              </blockquote>

              <img
                src="/assets/image/cau mo dau.jpg"
                alt="Công nhân công nghiệp hiện đại"
                className="w-full lg:w-[41.67%] rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>

        <section className="text-white w-full bg-slate-950">
          <div className="flex flex-col lg:flex-row px-4 lg:px-16 max-w-7xl mx-auto">
            <div className="lg:sticky lg:top-0 lg:h-screen grid place-content-center w-full lg:w-1/2 py-8 lg:py-0">
              <p className="text-lg sm:text-xl lg:text-2xl px-0 lg:px-8 font-medium text-left tracking-tight leading-relaxed">
                <span className="font-bold">🌟 Giai cấp công nhân, </span>, theo chủ nghĩa Mác – Lênin, họ:
                <br />
                <span className="font-bold">- 🏭 Là sản phẩm của nền đại công nghiệp</span>
                <br />
                <span className="font-bold">- 🌈 Đóng vai trò chủ đạo trong nền kinh tế</span>
                <br />
                <span className="font-bold">- 🚫 Không sở hữu tư liệu sản xuất</span>
                <br />
                <span className="font-bold">- 💰 Bị bóc lột giá trị thặng dư</span>
                <br />
                <span className="font-bold">- ⚡ Có mâu thuẫn thúc đẩy đấu tranh giai cấp</span>
              </p>
            </div>

            <div className="grid gap-8 w-full lg:w-1/2 py-8 lg:py-0">
              {[
                {
                  bg: "bg-green-500",
                  rotate: "rotate-6",
                  title: "🏭 Gắn liền với công nghiệp hiện đại",
                  image: "phantich1.jpg",
                },
                {
                  bg: "bg-red-400",
                  rotate: "-rotate-6",
                  title: "⚒️ Sản xuất ra của cải vật chất",
                  image: "phantich2.jpg",
                },
                {
                  bg: "bg-orange-400",
                  rotate: "rotate-5",
                  title:
                    "🚫 Không sở hữu tư liệu sản xuất",
                  image: "phantich3.jpg",
                },
                {
                  bg: "bg-blue-400",
                  rotate: "-rotate-5",
                  title: "💰 Bị bóc lột giá trị thặng dư",
                  image: "phantich4.jpg",
                },
                {
                  bg: "bg-purple-400",
                  rotate: "rotate-6",
                  title:
                    "⚡ Mâu thuẫn thúc đẩy đấu tranh giai cấp",
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
