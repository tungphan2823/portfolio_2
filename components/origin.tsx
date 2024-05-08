"use client";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
export default function Origin() {
  useGSAP(() => {
    let text = new SplitType("#hanoi");
    let text1 = new SplitType("#helsinki");
    let characters = document.querySelectorAll(".char");
    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add("translate-y-full");
    }
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 1,
      duration: 0.8,
    });
  });
  return (
    <div className="flex items-center ">
      <div className="2xl:p-20 pr-16 font-Inter font-bold 2xl:text-4xl lg:text-2xl text-xl flex flex-1 justify-end">
        <div>
          <h1 id="hanoi" className="clip-logo">
            Origin From HaNoi, VietNam
          </h1>
          <h1 id="helsinki" className="clip-logo">
            Based In Helsinki, Finland
          </h1>
        </div>
      </div>
    </div>
  );
}
