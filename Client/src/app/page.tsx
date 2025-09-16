"use client";

import ConclusionSection from "@/app/_components/conclusion";
import DevelopmentSection from "@/app/_components/development";
import InfinityBrand from "@/app/_components/infinity-brand";
import Introduction from "@/app/_components/introduction";
import LazyVideo from "@/app/_components/lazy-video";
import OpinionSection from "@/app/_components/opinion";
import { TimelineDemo } from "@/app/_components/timeline-2";
import { TracingBeamDemo } from "@/app/_components/tracing-beam";
import WelcomeSection from "@/app/_components/welcome-section";
import LampDemo from "@/components/ui/lamp";
import { SiteHeader } from "@/components/ui/site-header";
import { JSX, useState } from "react";
import { HeroParallaxDemo } from "./_components/hero-parallax";
import { GoogleGeminiEffectDemo } from "./_components/google-gemini-effect";
import PlantLoader from "@/components/ui/plant-loader";
import ChatBotIntegration from "@/app/_components/chat-bot";
import ChatContainer from "@/components/ui/ChatContainer";
import { ChatProvider } from "@/context/ChatContext";
export default function HorizontalScroll(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div
        className={`grid min-h-screen place-items-center ${
          isLoading ? "block" : "hidden"
        }`}
      >
        <PlantLoader
          onLoadingComplete={() => {
            // Add a small delay before hiding the loader
            setTimeout(() => setIsLoading(false), 500);
          }}
          minimumLoadingTime={3500} // Set minimum loading time to 3 seconds
        />
      </div>
      <div className={`relative ${isLoading ? "hidden" : "block w-full"}`}>
        {/* <ChatBotIntegration /> */}
        <SiteHeader />

        <main>
          <section
            id="welcome-header"
            className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
          >
            <LazyVideo
              src="/assets/videos/video.mp4"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="container relative z-10 mx-auto px-4">
              <div className="text-center">
                <WelcomeSection />
              </div>
            </div>
          </section>

          <section id="definition">
            <OpinionSection />
            <DevelopmentSection />
          </section>

          <section id="mission" className="bg-white-300">
            <ConclusionSection />
          </section>

          <section id="progress" className="bg-white-300 my-5">
            <HeroParallaxDemo />
          </section>

          <section id="opportunities-challenges" className="bg-black">
            <div className="h-[20vh]">
              <LampDemo />
            </div>
            <TimelineDemo />
          </section>

          <section id="chat" className="bg-slate-950">
            <section className="text-white w-full bg-slate-950 grid place-content-center px-4 pt-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl px-4 sm:px-8 font-semibold text-center tracking-tight leading-[120%]">
                MLN AI Chatbot
              </h1>
            </section>
            <div className={`h-[90vh] w-full sm:px-[15%] sm:py-[5%]`}>
              <ChatProvider>
                <ChatContainer />
              </ChatProvider>
            </div>
          </section>

          <div className="text-center py-8 bg-black">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold animate-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Cảm ơn bạn vì đã ghé thăm web!
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-4">
              Chúng tôi trân trọng thời gian của bạn và hy vọng bạn thích trang web này.
            </p>
            <div className="flex justify-center mt-4">
              <svg
                className="w-12 h-12 text-red-500 animate-bounce"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
