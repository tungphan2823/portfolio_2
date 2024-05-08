"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Project() {
  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#block4",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      });
      tl.to("#block2", { x: 100, duration: 5 })
        .to("#block3", { x: 200, duration: 5 })
        .to("#block4", { x: 300, duration: 5 });
    });
  });
  return (
    <div id="block0" className=" text-xl lg:text-2xl xl:text-3xl p-16">
      <h1>PROJECTS</h1>
      <div id="block1" className="p-8 max-w-2xl">
        <h1 className="font-Freeman font-bold">
          <a
            className="text-greenDeep"
            href="https://github.com/ngoctran-thn/PopupPro"
          >
            POPUPPRO
          </a>{" "}
          ○ 2023
        </h1>
        <div className="text-sm lg:text-xl">
          {" "}
          <p>Frontend Developer </p>
          <p>TypeScript, React JS, Node JS, PostgreSQL ○ VAMK - Wartsila </p>
        </div>
      </div>
      <div id="block2" className="p-8 max-w-2xl">
        <h1 className="font-Freeman font-bold">
          <a
            className="text-greenDeep"
            href="https://github.com/tungphan2823/Java-Server-Programming"
          >
            {" "}
            Student Management Application
          </a>
          ○ 2023
        </h1>
        <p className="text-sm lg:text-xl">JavaScript, React JS, PostgreSQL ○ VAMK </p>
      </div>
      <div id="block3" className="p-8 max-w-2xl">
        <h1 className="font-Freeman font-bold">
          <a
            className="text-greenDeep"
            href="https://github.com/tungphan2823/2D_DUNGEON_GAME"
          >
            2D Dungeon Game
          </a>{" "}
          ○ 2023
        </h1>
        <p className="text-sm lg:text-xl">Java ○ VAMK </p>
      </div>

      <div id="block4" className="p-8 max-w-2xl">
        <h1 className="font-Freeman font-bold">
          <a
            className="text-greenDeep"
            href="https://github.com/tungphan2823/Web_Storage"
          >
            Order Management Application
          </a>{" "}
          ○ 2021
        </h1>
        <p className="text-sm lg:text-xl">HTML, CSS, JavaScript ○ VAMK </p>
      </div>
      <div id="block5"></div>
    </div>
  );
}
