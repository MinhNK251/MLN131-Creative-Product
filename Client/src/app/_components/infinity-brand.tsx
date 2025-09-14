import Image from "next/image";

function InfinityBrand() {
  const brandItems = [
    {
      href: "https://daihoc.fpt.edu.vn/",
      src: "/assets/image/logo-fpt.jpg",
      alt: "FPT University",
    },
    {
      href: "/",
      src: "/assets/image/logo.jpg",
      alt: "Logo",
    },
    {
      href: "/",
      src: "/assets/image/sponsor.jpg",
      alt: "Sponsor",
    },
  ];

  const BrandList = ({ ariaHidden = false }) => (
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-2 md:[&_li]:mx-4 lg:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden={ariaHidden}
    >
      {brandItems.map((item, index) => (
        <li key={index}>
          <a
            target="_blank"
            href={item.href}
            className="border bg-primary text-primary-foreground text-2xl grid place-content-center p-1 md:p-2 rounded-md transform hover:scale-105 transition-transform duration-300"
            rel="noreferrer"
          >
            <Image
              alt={item.alt}
              src={item.src || "/placeholder.svg"}
              height={80}
              width={80}
              className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
            />
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full py-4 md:py-6 lg:py-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      {[...Array(4)].map((_, index) => (
        <BrandList key={index} ariaHidden={index !== 0} />
      ))}
    </div>
  );
}

export default InfinityBrand;
