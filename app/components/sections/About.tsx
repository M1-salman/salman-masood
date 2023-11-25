"use client";
import Image from "next/image";
import github from "@/public/svg/github.svg";
import linkedin from "@/public/svg/instagram.svg";
import instagram from "@/public/svg/linkedin.svg";
import salman from "@/public/img/salman.jpg";
import x from "@/public/svg/X.svg";
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
        .to(".reveal-left", 1, {
          "--myWidth": "0%",
          ease: Power2.easeInOut,
          delay: -0.7,
        })
        .to(".reveal-top", 1, {
          translateY: 0,
          ease: Power2.easeInOut,
          delay: -0.7,
        })
        .from(".img-reveal", 1, {
          width: 0,
          ease: Power2.easeInOut,
          delay: -1.1,
        })
        .from(".para-reveal", 1, {
          opacity: 0,
          ease: Power2.easeInOut,
          delay: -0.7,
        });
    }, el);

    return () => ctx.revert();
  }, []);
  return (
    <main ref={el}>
      <div className="py-28 relative h-screen about-reveal">
        <div className="flex justify-between px-28">
          <div>
            <div className="overflow-hidden relative reveal-left">
              <h1 className="text-7xl reveal-top">SALMAN MASOOD</h1>
            </div>
            <div className="overflow-hidden my-2 relative reveal-left">
              <h2 className="text-3xl text-red-500 inline-block reveal-top">
                FULLSTACK DEVELOPER
              </h2>
            </div>
            <p className="text-sm font-brooklyn w-[35rem] opacity-70 para-reveal">
              Exploring new technologies and applying them to projects and
              building scalable experiences for the web.Looking forward to build
              together!
            </p>
          </div>
          <div className="w-[9.5rem] flex justify-center items-center">
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
        <div className="flex justify-between items-end h-4/6 px-28">
          <div className="overflow-hidden relative reveal-left">
            <div className="flex reveal-top">
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
              <a
                href="https://www.instagram.com/realsalmanmasood/"
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
          <div className="overflow-hidden relative reveal-left">
            <div className="reveal-top">
              <a
                href="#"
                className="ml-10 text-2xl text-stroke text-transparent"
              >
                Skills
              </a>
              <a
                href="#"
                className="ml-10 text-2xl text-stroke text-transparent"
              >
                Projects
              </a>
              <a
                href="#"
                className="ml-10 text-2xl text-stroke text-transparent"
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
