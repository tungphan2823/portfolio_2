import Image from "next/image";
import NavBar from "@/components/navBar";
import Aboutme from "@/components/aboutme";
import ProfileImg from "@/components/profileImg";
import AutoScrolling from "@/components/autoScroll";
import Introduction from "@/components/introduce";
import Project from "@/components/project";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Preloader from "@/components/preloader";
import Origin from "@/components/origin";
export default function Home() {
  return (
    <main>
      <Preloader />
      <NavBar />
      <div className=" h-full lg:h-[100vh] ">
        <Aboutme />
        <Origin />

        <AutoScrolling scrollType="landing" />
      </div>
      <Introduction />
      <AutoScrolling scrollType="tool" />
      <Project />
      <AutoScrolling scrollType="work" />
      <div className="md:flex flex-1 pt-20">
        <div className="text-blueLight flex gap-4 p-16 ">
          <div>
            <a href="https://github.com/tungphan2823">
              {" "}
              <GitHubIcon />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/tungphan2823/"></a>
            <LinkedInIcon />
          </div>
          <div>
            <a href="https://www.instagram.com/tung.tha_nh/">
              {" "}
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="justify-end lg:flex flex-1 p-16">
          <div>
            <h1 className="md:text-4xl text-3xl"> © Tung Phan 2024</h1>
            <h1 className="text-left lg:text-right">SOFTWARE DEVELOPER</h1>
            <h1 className="text-left lg:text-right">tungphann.work@gmail.com</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
