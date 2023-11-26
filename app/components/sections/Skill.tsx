"use client";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";

const Skill = () => {
  const el = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(".text-translate-x", {
        translateX: "110%",
        scrollTrigger: {
          trigger: ".text-translate-x",
          scrub: true,
        },
        ease: Power2.easeInOut,
      });

      gsap.from(".text-opacity", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".text-opacity",
          scrub: true,
        },
        ease: Power2.easeInOut,
      });

      gsap.from(".text-translate--x", {
        translateX: "-110%",
        scrollTrigger: {
          trigger: ".text-translate--x",
          scrub: true,
        },
        ease: Power2.easeInOut,
      });

      gsap.from(".text-opacity-2", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".text-opacity-2",
          scrub: true,
        },
        ease: Power2.easeInOut,
      });

      gsap.from(".text-translate-x-2", {
        translateX: "110%",
        scrollTrigger: {
          trigger: ".text-translate-x-2",
          scrub: true,
        },
        ease: Power2.easeInOut,
      });
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={el} className="px-28" id="skills">
      <div>
        <h1 className="text-5xl text-center leading-[6rem]">Skills</h1>
      </div>
      <div className="text-5xl text-center leading-[6rem]">
        <div className="bg-red-500 overflow-hidden">
          <span className="text-translate-x inline-block">
            HTML CSS JAVASCRIPT TYPESCRIPT
          </span>
        </div>
        <div>
          <span className="text-opacity">NODE EXPRESS BOOTSTRAP</span>
        </div>
        <div className=" bg-lime-300 text-black overflow-hidden">
          <span className="text-translate--x inline-block">
            MONGODB REACT REDUX NEXT
          </span>
        </div>
        <div className="text-opacity-2">TAILWINDCSS GIT GITHUB</div>
        <div className=" bg-orange-500 overflow-hidden">
          <span className="text-translate-x-2 inline-block">
            SANITY CMS MATERIAL UI POSTMAN
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skill;
