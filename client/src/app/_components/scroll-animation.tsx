"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-1/340592928_803920320611167_2730797031617358474_n.jpg?stp=dst-jpg_p160x160_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=bTKB6OHUUC8Q7kNvgFlyuq5&_nc_oc=Adh7dju0zO5jnRHS813f_OZgnmWADAKoS6BIauU2z5csFv1d4uL8F3POw6TypTjLB-A&_nc_zt=24&_nc_ht=scontent.fsgn12-1.fna&_nc_gid=AxayErWxDGFl-1PsMcWG_60&oh=00_AYA-R-3dbdiu9FuKKeNL8zuPNBImyulZLG3SRG4B_LIBKg&oe=6786FCB7"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
