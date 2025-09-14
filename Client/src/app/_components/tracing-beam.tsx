"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-lg  w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-4xl font-bold mb-4")}>{item.title}</p>

            <div className="text-lg prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Đầu tư vào giáo dục chất lượng",
    description: (
      <>
        <p>
        Giáo dục không chỉ trang bị 🎒 tri thức mà còn định hình tư duy, kỹ năng, và nhân cách cho con người. 
        Một hệ thống giáo dục tiên tiến cần đảm bảo các yếu tố:
        </p>
        <p>
        - Học tập suốt đời 📚: Cung cấp cơ hội học tập cho mọi lứa tuổi để người dân có thể cập nhật kiến thức
        , nâng cao năng lực trong một thế giới luôn thay đổi.
        </p>
        <p>
        - Giáo dục hướng kỹ năng 🧑‍🏫: Kết hợp giữa lý thuyết và thực hành để chuẩn bị tốt hơn cho lực lượng lao động, 
        giúp họ đáp ứng nhu cầu thị trường.
        </p>
        <p>
        - Công bằng trong giáo dục 🙋: Đảm bảo mọi người, bất kể giới tính, dân tộc, hoặc hoàn cảnh kinh tế, đều có cơ hội tiếp cận giáo dục.
        </p>
      </>
    ),
    badge: "Thứ 1",
    image:
      "/assets/image/Phat_Trien/GiaoDuc/anh1.jpg",
  },
  {
    title: "Phát triển thể chất và tinh thần",
    description: (
      <>
      Một xã hội khỏe mạnh chỉ có thể được xây dựng trên nền tảng sức khỏe và tinh thần vững vàng:
        <p>
          - Nâng cao sức khỏe cộng đồng 🧑‍⚕️: Đầu tư vào hệ thống y tế hiện đại và xây dựng ý thức tự chăm sóc sức khỏe trong mỗi cá nhân.
        </p>
        <p>
        Khuyến khích lối sống lành mạnh 🤼: Tạo môi trường thân thiện để phát triển các hoạt động thể thao, văn hóa và nghệ thuật.
        </p>
        <p>
        Chăm sóc sức khỏe tinh thần 🫶: Đặc biệt trong thời đại công nghệ, cần chú trọng đến việc ngăn chặn stress và các vấn đề tâm
        lý do áp lực xã hội gây ra.
        </p>
      </>
    ),
    badge: "Thứ 2",
    image:
      "/assets/image/Phat_Trien/TheChat/anh1.jpg",
  },
  {
    title: "Xây dựng môi trường xã hội hỗ trợ",
    description: (
      <>
        Con người không thể phát triển toàn diện nếu sống trong một môi trường thiếu lành mạnh:
        <p>
          - Gia đình là nền tảng 👪: Giáo dục gia đình cần được đề cao để mỗi thành viên trở thành công dân có trách nhiệm.
        </p>
        <p>
          - Cộng đồng hỗ trợ 🏴󠁥󠁳󠁶󠁣󠁿: Tạo dựng một cộng đồng nơi mọi người giúp đỡ lẫn nhau, chia sẻ cơ hội và giảm thiểu bất công.
        </p>
      </>
    ),
    badge: "Thứ 3",
    image:
      "/assets/image/Phat_Trien/MoiTruong/anh1.jpg",
  },
  {
    title: "Thúc đẩy sáng tạo và đổi mới",
    description: (
      <>
        Để phát triển con người trong thời đại công nghệ, cần khuyến khích tư duy đổi mới và tinh thần khởi nghiệp:
        <p>
          - Hỗ trợ nghiên cứu và sáng tạo 🥼: Đầu tư vào các trung tâm nghiên cứu và cung cấp tài trợ cho những ý tưởng mới.
        </p>
        <p>
          - Xây dựng văn hóa đổi mới ⚖️: Đưa ra chính sách hỗ trợ khởi nghiệp, giảm bớt các rào cản pháp lý để thúc đẩy tinh thần sáng tạo.
        </p>
      </>
    ),
    badge: "Thứ 4",
    image:
      "/assets/image/Phat_Trien/SangTao/anh1.jpg",
  },
  {
    title: "Định hướng phát triển đạo đức và giá trị",
    description: (
      <>
        Phát triển con người không chỉ là phát triển năng lực mà còn phải chú trọng xây dựng nền tảng đạo đức:
        <p>
        - Giáo dục đạo đức 👨🏽‍🏫: Đưa các giá trị như trách nhiệm, lòng nhân ái, và tính trung thực vào chương trình giảng dạy.
        </p>
        <p>
        - Khuyến khích hành động vì cộng đồng 🚯: Đẩy mạnh các chương trình tình nguyện và đóng góp xã hội để tạo dựng ý thức vì tập thể.
        </p>
      </>
    ),
    badge: "Thứ 5",
    image:
      "/assets/image/Phat_Trien/DaoDuc/anh1.jpg",
  },
];
