import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from "react";

export default function Introduction() {
  const words = [
    {
      text: "Vì",
      className: "text-white",
    },
    {
      text: "lợi",
      className: "text-white",
    },
    {
      text: "ích",
      className: "text-white",
    },
    {
      text: "mười",
      className: "text-white",
    },
    {
      text: "năm",
      className: "text-white",
    },
    {
      text: "trồng",
      className: "text-white",
    },
    {
      text: "cây",
      className: "text-white",
    },
  ];
  const words2 = [
    {
      text: "Vì",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "lợi",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "ích",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "trăm",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "năm",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "trồng",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "người",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="min-h-screen py-10 flex flex-col justify-center items-center">
        <h1 className="font-departure text-2xl sm:text-3xl md:text-4xl relative z-10 text-center px-4 md:px-0 md:w-[80%] lg:w-[60%]">
          <TypewriterEffectSmooth words={words} />
          <TypewriterEffectSmooth words={words2} />
        </h1>
        <span className="mt-8 text-4xl">☘️</span>
      </div>
    </>
  );
}
