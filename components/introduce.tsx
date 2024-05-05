"use client";
import ProfileImg from "./profileImg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CircleText from "./circleText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import AutoScrolling from "./autoScroll";
export default function Introduction() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const myAge = currentYear - 2003;
  useGSAP(() => {
    gsap.to("#image", {
      // x: 1000,
      duration: 6,
      scrollTrigger: {
        trigger: "#introduce",
        start: "top 90%",
        end: "top 15%",

        toggleActions: "restart none none none",
        pin: "#image",
        scrub: 10,
      },
    });
  });

  return (
    <div className="p-10">
      <div className="font-semibold">
        A LITTLE ABOUT ME AND HOW MY CODING JOURNAL START
      </div>
      <div className="flex  p-8   2xl:text-3xl text-2xl ">
        <div className="2xl:max-w-[1000px] max-w-[800px]">
          <div className="font-VT min-h-[800px] ">
            Before I stepped into the world of web developing, I was a computer
            science high school student. Me and two more friends of my, we start
            build a coffee review website. The aim of the project is to make a
            website that can show to the viewer where have the best coffee in
            town. <br></br> Coding it forced me to understand how HTML and CSS
            play together, a skill set I&apos;ve carried and kept fresh in the years
            since. My side project work is just an excuse to satisfy my
            curiosity about new technologies and understand how the web is
            moving forward. <br></br>
            Outside work, I enjoy going to the gym, listening to and playing
            music, and playing pool with my friends.
            <div>
              <CircleText />
            </div>
          </div>

          <div
            id="introduce"
            className="font-Freeman text-blueLight p-6 2xl:text-4xl text-2xl backdrop-blur-xl  border-2 border-blueLight rounded-xl"
          >
            <div className="pb-4">
              <label className="text-lg">NAME</label>
              <h1>Tung Phan</h1>
            </div>
            <div className="pb-4">
              <label className="text-lg">AGE</label>
              <h1>{myAge} years old</h1>
            </div>
            <div className="pb-4">
              <label className="text-lg">EDUCATIONS</label>
              <h1>Vaasa University of Applied Sciences</h1>
              <h3 className="text-lg">
                Information Technology, Bachelor of Engineering
              </h3>
            </div>
            <div className="pb-4">
              {" "}
              <label className="text-lg">LOCATION</label>
              <h1>Helsinki, Finland</h1>
            </div>
            <div className="pb-2">
              <label className="text-lg">SKILLS</label>
              <h1>ReactJS, JavaScript, TypeScript, Next.js, Tailwind CSS, </h1>
              <h1>Spring Boot, ...</h1>
              <h1>Figma, Git, Postman </h1>
            </div>
            <div className="pb-2">
              <label className="text-lg">LANGUAGES</label>
              <h1>English, Vietnamese </h1>
            </div>
            <div className="pb-2">
              <label className="text-lg">SOCIALS</label>
              <h1 className="text-greenDeep">
                <a href="https://www.linkedin.com/in/tungphan2823/">LinkedIn</a>
                , <a href=" https://github.com/tungphan2823">Github</a>
              </h1>
            </div>
          </div>
        </div>

        <div id="image" className="  md:flex hidden flex-1 justify-end ">
          <ProfileImg />
        </div>
      </div>
    </div>
  );
}
