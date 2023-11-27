import Image from "next/image";
import github from "@/public/svg/github.svg";
import linkedin from "@/public/svg/instagram.svg";
import instagram from "@/public/svg/linkedin.svg";
import x from "@/public/svg/x.svg";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 md:px-20 lg:px-28 pt-28 pb-16">
      <span className="h-[0.5px] w-full bg-white inline-block"></span>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between mt-16">
        <div className="font-brooklyn">copyright@salmanmasood2023</div>
        <div className="flex my-8 lg:my-0">
          <a href="https://github.com/M1-salman" target="_blank">
            <Image
              src={github}
              width={25}
              height={25}
              className="invert mr-10"
              alt="github svg not found"
            />
          </a>
          <a href="https://www.instagram.com/realsalmanmasood/" target="_blank">
            <Image
              src={linkedin}
              width={23}
              height={23}
              className="invert pt-[1px] mr-10"
              alt="github svg not found"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/salman-masood917/"
            target="_blank"
          >
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
        <div className="font-brooklyn">salmanmasood917@gmail.com</div>
      </div>
    </footer>
  );
};

export default Footer;
