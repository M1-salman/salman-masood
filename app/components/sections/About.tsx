import Image from "next/image";
import github from "@/public/svg/github.svg";
import linkedin from "@/public/svg/instagram.svg";
import instagram from "@/public/svg/linkedin.svg";
import x from "@/public/svg/X.svg";

const About = () => {
  return (
    <main className="text-white py-28 h-screen">
      <div>
        <h1 className="text-7xl">SALMAN MASOOD</h1>
        <h2 className="text-3xl text-red-500 my-2">FULLSTACK DEVELOPER</h2>
        <p className="text-sm font-brooklyn w-[35rem] opacity-70">
          Exploring new technologies and applying them to projects and building
          scalable experiences for the web.Looking forward to build together!
        </p>
      </div>
      <div className="flex justify-between items-end h-4/6">
        <div className="flex">
          <a href="https://github.com/M1-salman" target="_blank">
            <Image
              src={github}
              width={25}
              height={25}
              className="invert mr-10"
              alt="github svg not found"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/salman-masood917/"
            target="_blank"
          >
            <Image
              src={linkedin}
              width={23}
              height={23}
              className="invert pt-[1px] mr-10"
              alt="github svg not found"
            />
          </a>
          <a href="https://www.instagram.com/realsalmanmasood/" target="_blank">
            <Image
              src={instagram}
              width={25}
              height={25}
              className="invert mr-10"
              alt="github svg not found"
            />
          </a>
          <a href="https://twitter.com/salman_code" target="_blank">
            <Image
              src={x}
              width={16}
              height={16}
              className="invert mt-1"
              alt="github svg not found"
            />
          </a>
        </div>
        <div>aa</div>
      </div>
    </main>
  );
};

export default About;
