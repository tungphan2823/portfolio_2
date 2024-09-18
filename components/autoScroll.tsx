import Marquee from "react-fast-marquee";
import AcUnitIcon from "@mui/icons-material/AcUnit";
type ScrollingProps = {
  scrollType: string;
};
import Image from "next/image";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import javascript from "../public/javascript.png";
import ts from "../public/typesscript.png";
import py from "../public/python.png";
import reactImg from "../public/react.png";
import tailwind from "../public/images.png";
import docker from "../public/docker.png";
import aws from "../public/aws.jpg";
import git from "../public/git.png";
import next from "../public/next.png";
export default function AutoScrolling({ scrollType }: ScrollingProps) {
  return (
    <div className="">
      <div className="w-[50%] flex flex-col pt-14 "></div>

      {scrollType === "landing" && (
        <>
          <Marquee autoFill pauseOnClick>
            <div className=" m-1 rounded-xl flex space-x-5   font-bold  cursor-pointer items-center gap-1  2xl:text-md 3xl:text-xl md:text-xs md:p-4 xl:p-16 " >
              <div className=" animate-spin-slow	">
                <AcUnitIcon />
              </div>
              /SOFTWARE DEVELOPER /WEB DEVELOPER /STUDENT
            </div>
          </Marquee>
        </>
      )}
      {scrollType === "tool" && (
        <>
          <Marquee autoFill pauseOnClick>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={javascript} alt="js"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={ts} alt="ts"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={py} alt="py"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={reactImg} alt="rs"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={tailwind} alt="css"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={docker} alt="dc"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={aws} alt="aws"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={git} alt="git"></Image>
            </div>
            <div className=" m-1 rounded-xl flex space-x-5 p-16  font-bold text-xs cursor-pointer items-center gap-1 max-w-48">
              <Image src={next} alt="next"></Image>
            </div>
          </Marquee>
        </>
      )}
      {scrollType === "work" && (
        <>
          <div>
            <Marquee autoFill pauseOnClick direction="right">
              <div className=" m-1 rounded-xl flex space-x-5  p-8 font-bold text-xs cursor-pointer items-center gap-3 ">
                <div></div>
                IN DEVELOPMENT
              </div>
            </Marquee>
          </div>
        </>
      )}
    </div>
  );
}
