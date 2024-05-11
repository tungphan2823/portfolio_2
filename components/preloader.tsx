"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
export default function Preloader() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#blinder", {
      scaleY: 0,
      delay: 1,
      stagger: 0.3,
      ease: "power3.out",
      onComplete: function () {
        gsap.set("#loader", { zIndex: -1 });
      },
    });
  });
  return (
    <div id="loader" className="h-[100vh] w-full fixed z-50">
      <div id="preloader" className="top-0 absolute w-full h-[100vh] flex  ">
        <div
          id="blinder"
          className="bg-blueLight h-[100vh] origin-top flex-1"
        ></div>
        <div
          id="blinder"
          className="bg-blueLight h-[100vh] origin-top flex-1 text-lightOrange backdrop-blur-md	p-8  "
        >
          <div className="content-center font-Freeman text-9xl	drop-shadow-md	tracking-wider		">
            {" "}
            <h1>Tung</h1> <h1>Phan</h1>{" "}
          </div>
        </div>
        <div
          id="blinder"
          className="bg-blueLight h-[100vh] origin-top flex-1"
        ></div>
        <div
          id="blinder"
          className="bg-blueLight h-[100vh] origin-top flex-1"
        ></div>
        <div
          id="blinder"
          className="bg-blueLight h-[100vh] origin-top flex-1"
        ></div>
      </div>
    </div>
  );
}
