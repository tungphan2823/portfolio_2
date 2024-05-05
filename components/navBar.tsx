"use client";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import React, { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SquareIcon from "@mui/icons-material/Square";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
const useDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Clear the interval on component unmount
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return formattedTime;
};
export default function NavBar() {
  const time = useDate();
  useGSAP(() => {
    gsap.to("#smallText", {
      duration: 4,
      text: " Thank you for waiting",
      delay: 3,
    });
    let text = new SplitType("#logo");
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
    <>
      {" "}
      <div className=" flex top-0 sticky 2xl:p-4 p-2  border-b-2 border-blueLight backdrop-blur-md z-10">
        <div className="p-2">
          {" "}
          <h1
            id="logo"
            className=" flex items-center font-Freeman 2xl:text-3xl text-2xl clip-logo "
          >
            r/TungPhan
          </h1>
        </div>

        <div className="p-2 flex flex-1 items-center justify-center gap-1 ">
          {" "}
          <div className="text-lightOrange ">
            <SquareIcon />
          </div>
          <h1 id="smallText" className="2xl:text-base text-sm">
            {" "}
            Welcome to my home page.
          </h1>
        </div>
        <div className="flex gap-4 items-center 2xl:text-base text-xs ">
          {" "}
          <h1 className="md:flex   hidden items-center gap-2 ">
            <div>
              <AccessTimeIcon />
            </div>{" "}
            <div>{time}</div>
          </h1>
          <h1>Helsinki</h1>
        </div>
      </div>
    </>
  );
}
