"use client";
import Image from "next/image";
import github from "@/public/svg/github.svg";
import linkedin from "@/public/svg/instagram.svg";
import instagram from "@/public/svg/linkedin.svg";
import salman from "@/public/img/salman.jpg";
import x from "@/public/svg/x.svg";
import { useRef, useLayoutEffect } from "react";
import { gsap, Power2 } from "gsap";

const About = () => {
  const el = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".about-reveal", 1, {
          "--myHeight": "0%",
          ease: Power2.easeInOut,
        })
        .to(".text-reveal-x", 1, {
          "--myWidth": "0%",
          ease: Power2.easeInOut,
          delay: -0.7,
        })
        .to(".text-reveal-y", 1, {
          translateY: 0,
          ease: Power2.easeInOut,
          delay: -0.7,
        })
        .from(".img-reveal", 1, {
          width: 0,
          ease: Power2.easeInOut,
          delay: -1.1,
        })
        .from(".para-text-reveal", 1, {
          opacity: 0,
          ease: Power2.easeInOut,
          delay: -0.7,
        });
    }, el);

    return () => ctx.revert();
  }, []);
  return (
    <main ref={el}>
      <div className="pt-20 pb-28 md:py-28 relative h-screen max-w-full about-reveal">
        <div className="flex flex-col-reverse md:flex-row justify-between px-6 sm:px-12 md:px-20 lg:px-28">
          <div>
            <div className="overflow-hidden relative text-reveal-x">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl text-reveal-y">
                SALMAN MASOOD
              </h1>
            </div>
            <div className="overflow-hidden my-2 relative text-reveal-x">
              <h2 className="text-md sm:text-2xl lg:text-3xl text-red-500 inline-block text-reveal-y">
                FULLSTACK DEVELOPER
              </h2>
            </div>
            <p className="text-[0.8rem] leading-[1.5rem] font-brooklyn w-[20rem] sm:w-[35rem] para-text-reveal">
              Currently pursuing BCA from M.C.R.P. Bhopal and also focusing on
              learning new technologies. I have built trending web app projects
              using React, Next, Typescript, TaiwlindCSS, Redux, Nodejs,
              PostgreSQL, AWS, Docker etc. And also good understanding of system
              design. Looking forward to build together!
            </p>
          </div>
          <div className="w-[6rem] h-[5.5rem] sm:w-[9.5rem] sm:h-[8.5rem] md:h-auto flex justify-center items-center mb-6 md:mb-0">
            <Image
              width={150}
              height={150}
              src={salman}
              priority={true}
              className="rounded-[50rem] img-reveal"
              alt="salman image not found"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end h-2/6 md:h-3/6 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="overflow-hidden relative text-reveal-x mt-6 lg:mt-0">
            <div className="flex text-reveal-y">
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
                href="https://www.instagram.com/realsalmanmasood/"
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
          </div>
          <div className="overflow-hidden relative text-reveal-x">
            <div className="text-reveal-y text-sm sm:text-2xl flex justify-between sm:block">
              <a
                href="#projects"
                className="lg:ml-10 text-stroke text-transparent"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="sm:ml-10 text-stroke text-transparent"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="sm:ml-10 text-stroke text-transparent"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
