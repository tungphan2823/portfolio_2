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
        className="text-2xl lg:text-3xl 2xl:text-5xl 2xl:max-w-[1400px] max-w-[1100px] pl-4 pt-8  min-h-[400px] leading-tight font-Inter	font-bold clip-logo  "
      >
        Hello, I&apos;m <span className="text-lightOrange">Tung Phan</span>,{" "}
        <br />A Software Developer based in Helsinki. Creating and designing
        websites from scratch is my passion. I enjoy crafting visually appealing
        and functional pages. Excited to keep learning and pushing boundaries in
        this ever-evolving field<span className="text-lightOrange">.</span>
      </h1>
    </div>
  );
}
