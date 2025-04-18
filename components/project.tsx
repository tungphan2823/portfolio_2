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
        .to("#block4", { x: 300, duration: 5 })
        .to("#block5", { x: 300, duration: 5 })
        .to("#block6", { x: 350, duration: 5 });
    });
  });
  return (
    <div id="block0" className=" text-xl lg:text-2xl xl:text-3xl p-16">
      <h1>EXPERIENCE</h1>
      <div className="  font-Freeman font-bold p-8">
        <a className="text-greenDeep"> Zoner Oy </a>○ April 2025 - Present
        <div className=" text-xl p-2">Junior Software Developer</div>
      </div>
      <div className="  font-Freeman font-bold p-8">
        <a className="text-greenDeep"> KyKy Today Oy (Katch Oy) </a>○ June 2024 - Dec 2024
        <div className=" text-xl p-2">Software Developer Intern</div>
      </div>

      <h1>PROJECTS</h1>
      <div id="block1" className="p-8 max-w-2xl">
        <h1 className="font-Freeman font-bold">
          <a
            className="text-greenDeep"
            href="https://github.com/tungphan2823/Kindergarten-Activity-Tracking-Application"
          >
            Kindergarten Activity Tracking Web Application
          </a>{" "}
          ○ 2024
        </h1>
        <div className="text-sm lg:text-xl">
          {" "}
          
          <p>TypeScript, React JS, Node JS, Tailwind CSS, Express JS, MongoDB</p>
        </div>
      </div>
      <div id="block2" className="p-8 max-w-2xl">
        <h1 className="font-Freeman font-bold">
          <a
            className="text-greenDeep"
            href="https://github.com/tungphan2823/good-keyboards"
          >
            GoodSwitch*
          </a>{" "}
          ○ 2024
        </h1>
        <div className="text-sm lg:text-xl">
          {" "}
          <p>E-commerce Website ○ Keyboards for coders</p>
          <p>TypeScript, React JS, NEXT JS, Tailwind CSS, SQLite</p>
        </div>
      </div>
      <div id="block3" className="p-8 max-w-2xl">
        <h1 className="font-Freeman font-bold">
          <a
            className="text-greenDeep"
            href="https://github.com/tungphan2823/Twitter_Java"
          >
            Twitter Clone
          </a>{" "}
          ○ 2024
        </h1>
        <p className="text-sm lg:text-xl">React JS, Java, PostgreSQL ○ VAMK </p>
      </div>
      <div id="block4" className="p-8 max-w-2xl">
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
      <div id="block5" className="p-8 max-w-2xl">
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
        <p className="text-sm lg:text-xl">
          JavaScript, React JS, PostgreSQL ○ VAMK{" "}
        </p>
      </div>
      <div id="block6" className="p-8 max-w-2xl">
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

      {/* <div id="block7" className="p-8 max-w-2xl">
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
      </div> */}
    </div>
  );
}
