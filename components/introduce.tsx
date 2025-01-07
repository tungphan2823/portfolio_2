"use client";
import ProfileImg from "./profileImg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CircleText from "./circleText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import profile from "@/public/profile.jpeg";
import AutoScrolling from "./autoScroll";
import Image from "next/image";
import { useRef } from "react";

export default function Introduction() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const myAge = currentYear - 2003;
  useGSAP(() => {
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    gsap.to(imageElement, {
      // x: 1000,
      // duration: 6,
      scrollTrigger: {
        trigger: textElement,
        start: "top 10%",
        end: "bottom 95%",
        pin: imageElement,
        pinSpacing: false,
        // markers: true,
        scrub: 4,
      },
    });
  });

  return (
    <div className="flex flex-1 p-8  2xl:text-3xl 3xl:text-4xl  text-2xl ">
      <div
        className="2xl:max-w-[1000px] 3xl:max-w-[1200px] max-w-[800px]"
        ref={textRef}
      >
        <div className="font-semibold p-4">
          A LITTLE ABOUT ME AND HOW MY CODING JOURNAL START
        </div>
        <div className="font-VT min-h-[800px] ">
          Before I stepped into the world of web developing, I was a computer
          science high school student. Me and two more friends of my, we start
          build a coffee review website. The aim of the project is to make a
          website that can show to the viewer where have the best coffee in
          town. <br></br> Coding it forced me to understand how HTML and CSS
          play together, a skill set I&apos;ve carried and kept fresh in the
          years since. My side project work is just an excuse to satisfy my
          curiosity about new technologies and understand how the web is moving
          forward. <br></br>
          Outside work, I enjoy going to the gym, listening to and playing
          music, and playing pool with my friends.
          <div>
            <CircleText />
          </div>
        </div>
        <div className="font-Freeman text-blueLight p-6 2xl:text-4xl text-2xl backdrop-blur-xl  border-2 border-blueLight rounded-xl">
          <div className="pb-4">
            <label className="text-lg">NAME</label>
            <h1>Tung Phan</h1>
          </div>
          <div className="pb-4">
            <label className="text-lg ">AGE</label>
            <h1><span className="text-greenDeep	">{myAge}</span> years old</h1>
          </div>
          <div className="pb-4">
            <label className="text-lg">EDUCATIONS</label>
            <h1>Vaasa University of Applied Sciences</h1>
            <h3 className="text-lg"> 
              Information Technology, Bachelor of Engineering | Graduated Dec 2024
            </h3>
          </div>
          <div className="pb-4">
            {" "}
            <label className="text-lg">LOCATION</label>
            <h1>Helsinki, Finland</h1>
          </div>
          <div className="pb-2 tracking-wide">
            <label className="text-lg ">SKILLS</label>
            <h1 className="text-2xl">
              <span className="text-orange-500">Language </span>JavaScript,
              TypeScript, Python, Java{" "}
            </h1>
            <h1 className="text-2xl">
              <span className="text-orange-500">Front-End </span> React.JS,
              NEXT.JS, Tailwind CSS
            </h1>
            <h1 className="text-2xl ">
              {" "}
              <span className="text-orange-500 ">Back-End </span>Node.JS,
              Express.JS,  Spring Boot,  GraphQL{" "}
            </h1>
            <h1 className="text-2xl">
               PostgreSQL,   MongoDB,  Git,  GitHub, CI/CD, Postman, JEST
            </h1>
            <h1 className="text-2xl">
             Cloud AWS, AI Prompt Engineering, ...
            </h1>
          </div>
          <div className="pb-2">
            <label className="text-lg">LANGUAGES</label>
            <h1>English, Vietnamese </h1>
          </div>
          <div className="pb-2">
            <label className="text-lg">SOCIALS</label>
            <div className="text-greenDeep	">
              <a href="https://www.linkedin.com/in/tungphan2823/">LinkedIn</a>,{" "}
              <a href=" https://github.com/tungphan2823">Github</a>
            </div>
          </div>
        </div>
      </div>

      <div ref={imageRef} className="  lg:flex hidden lg:flex-1 justify-end  ">
        <ProfileImg />
      </div>
    </div>
  );
}
