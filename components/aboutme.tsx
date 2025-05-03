"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import React, { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
export default function Aboutme() {
  useGSAP(() => {
    gsap.from("#aboutme", { duration: 8, delay: 1, text: "" });
  });

  return (
    <div className="p-6 ">
      <h1
        id="aboutme"
        className="text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl 2xl:max-w-[1400px] max-w-[1100px] pl-4 pt-8  min-h-[400px] leading-tight font-Inter	font-bold clip-logo  "
      >
        Hello, I&apos;m <span className="text-lightOrange">Tung Phan</span>,{" "}
        <br />A Software Engineer based in Helsinki, transforming ideas into digital experiences. I breathe life into the web, crafting elegant websites from concept to deployment with meticulous attention to detail. My code blends functionality with visual storytelling, creating intuitive user journeys that captivate and convert. When I&apos; m not pushing pixels or debugging code, I&apos; m exploring emerging technologies to stay at the cutting edge of this dynamic field.<span className="text-lightOrange">.</span>
      </h1>
    </div>
  );
}
