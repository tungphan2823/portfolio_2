"use client";
import profile from "@/public/profile.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function ProfileImg() {
  // useGSAP(() => [
  //   gsap.to("#profileImg", {
  //     x: -200,
  //     y: 200,
  //     scale: 1.5,
  //     zIndex: -1,
  //     duration: 5,
  //     scrollTrigger: {
  //       trigger: "#profileImg",
  //       start: "top 60%",
  //       end: "bottom center",
  //       toggleActions: "restart none none none",
  //       scrub: 1,
  //       markers: true,
  //     },
  //   }),
  // ]);
  return (
    <div className="  ">
      <Image
        className=" rounded-2xl 2xl:max-w-xl xl:max-w-md	max-w-lg	  "
        src={profile}
        alt="Profile Image"
      />
    </div>
  );
}
