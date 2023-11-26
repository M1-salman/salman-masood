"use client";
import Image from "next/image";
import ecommerce from "@/public/img/ecommerce.png";
import github from "@/public/svg/github.svg";
import arrow from "@/public/img/arrow.png";
import videocall from "@/public/img/videocall.png";
import filesharing from "@/public/img/filesharing.png";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";

const Project = () => {
  const el = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".text-reveal-x",
          },
        })
        .to(".text-reveal-x", 1, {
          "--myWidth": "0%",
          ease: Power2.easeInOut,
        })
        .to(".text-reveal-y", 1, {
          translateY: 0,
          ease: Power2.easeInOut,
          delay: -1,
        })
        .from(".text-reveal-ul", 1, {
          opacity: 0,
          ease: Power2.easeInOut,
          delay: -0.8,
        })
        .to(".reveal-img", 1, {
          "--myHeight": "0%",
          ease: Power2.easeInOut,
          delay: -1,
        })
        .from(".scale", 1, { scale: 1.3, ease: Power2.easeInOut, delay: -1 });

      const tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".text-reveal-x-2",
          },
        })
        .to(".text-reveal-x-2", 1, {
          "--myWidth": "0%",
          ease: Power2.easeInOut,
        })
        .to(".text-reveal-y-2", 1, {
          translateY: 0,
          ease: Power2.easeInOut,
          delay: -1,
        })
        .from(".text-reveal-ul-2", 1, {
          opacity: 0,
          ease: Power2.easeInOut,
          delay: -0.8,
        })
        .to(".reveal-img-2", 1, {
          "--myHeight": "0%",
          ease: Power2.easeInOut,
          delay: -1,
        })
        .from(".scale-2", 1, { scale: 1.3, ease: Power2.easeInOut, delay: -1 });

      const tl3 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".text-reveal-x-3",
          },
        })
        .to(".text-reveal-x-3", 1, {
          "--myWidth": "0%",
          ease: Power2.easeInOut,
        })
        .to(".text-reveal-y-3", 1, {
          translateY: 0,
          ease: Power2.easeInOut,
          delay: -1,
        })
        .from(".text-reveal-ul-3", 1, {
          opacity: 0,
          ease: Power2.easeInOut,
          delay: -0.8,
        })
        .to(".reveal-img-3", 1, {
          "--myHeight": "0%",
          ease: Power2.easeInOut,
          delay: -1,
        })
        .from(".scale-3", 1, { scale: 1.3, ease: Power2.easeInOut, delay: -1 });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={el} className="p-28" id="projects">
      <div>
        <h1 className="text-white text-center text-5xl">Projects</h1>
      </div>
      <div className="my-16 flex">
        <div className="reveal-img relative overflow-hidden">
          <Image
            width={450}
            height={500}
            src={ecommerce}
            priority={true}
            className="rounded-xl scale"
            alt="Ecommerce not found"
          />
        </div>
        <div className="ml-5">
          <div className="flex">
            <div className="overflow-hidden relative text-reveal-x">
              <h1 className="text-red-500 text-reveal-y">
                Built a Ecommerce platform
              </h1>
            </div>
            <div className="overflow-hidden relative text-reveal-x ml-5 flex">
              <a target="_blank" href="https://github.com/M1-salman/Ecommerce">
                <Image
                  src={github}
                  width={22}
                  height={22}
                  className="invert mr-5 opacity-90 text-reveal-y"
                  alt="github svg not found"
                />
              </a>
              <a target="_blank" href="https://ecommerce-m1-salman.vercel.app/">
                <Image
                  src={arrow}
                  width={22}
                  height={22}
                  className="invert opacity-90 text-reveal-y"
                  alt="arrow img not found"
                />
              </a>
            </div>
          </div>
          <ul className="font-brooklyn text-[0.8rem] leading-[2rem] text-reveal-ul">
            <li>
              Streamlined product management using Sanity CMS, making updates
              and modifications effortless.
            </li>
            <li>
              Credential-based authentication through MongoDB and Google SignIn
              with OAuth 2.0 using NextAuth.
            </li>
            <li>
              An efficient "Add to Cart" feature utilizing Redux Toolkit for
              seamless user experience.
            </li>
            <li>
              A contact page that securely transmitted data to a MongoDB
              database.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-16 flex flex-row-reverse justify-between">
        <div className="reveal-img-2 relative overflow-hidden">
          <Image
            width={450}
            height={500}
            src={videocall}
            priority={true}
            className="rounded-xl scale-2"
            alt="videocall img not found"
          />
        </div>
        <div>
          <div className="flex">
            <div className="overflow-hidden relative text-reveal-x-2">
              <h1 className="text-red-500 text-reveal-y-2">
                video call without a server
              </h1>
            </div>
            <div className="ml-5 overflow-hidden relative text-reveal-x-2 flex">
              <a
                target="_blank"
                href="https://github.com/M1-salman/WebRTC-VideoCall"
              >
                <Image
                  src={github}
                  width={22}
                  height={22}
                  className="invert mr-5 opacity-90 text-reveal-y-2"
                  alt="github svg not found"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/posts/salman-masood917_softwaredevelopment-videocall-webrtc-activity-7130472230764883968-BNIR?utm_source=share&utm_medium=member_desky"
              >
                <Image
                  src={arrow}
                  width={22}
                  height={22}
                  className="invert opacity-90 text-reveal-y-2"
                  alt="arrow img not found"
                />
              </a>
            </div>
          </div>
          <ul className="font-brooklyn text-[0.8rem] leading-[2rem] text-reveal-ul-2">
            <li>
              Implemented WebRTC using Javascript to create a real-time
              communication.
            </li>
            <li>
              Exchanged their SDP as an offer or answer between them to create a
              peer to peer connection.
            </li>
            <li>
              After a successful negotiation of their SDP, they can share their
              local stream with each other.
            </li>
            <li>
              Established error handling in the event of user disconnection
              using WebRTC data channel.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-16 flex">
        <div className="reveal-img-3 relative overflow-hidden">
          <Image
            width={450}
            height={500}
            src={filesharing}
            priority={true}
            className="rounded-xl scale-3"
            alt="Ecommerce not found"
          />
        </div>
        <div className="ml-5">
          <div className="flex">
            <div className="overflow-hidden relative text-reveal-x-3">
              <h1 className="text-red-500 text-reveal-y-3">
                File sharing in raw binary data
              </h1>
            </div>
            <div className="ml-5 overflow-hidden relative text-reveal-x-3 flex">
              <a target="_blank" href="https://github.com/M1-salman/Ecommerce">
                <Image
                  src={github}
                  width={22}
                  height={22}
                  className="invert mr-5 opacity-90 text-reveal-y-3"
                  alt="github svg not found"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/posts/salman-masood917_webdevelopment-fullstackdeveloper-backend-activity-7132426854451265536-B6kr?utm_source=share&utm_medium=member_desky"
              >
                <Image
                  src={arrow}
                  width={22}
                  height={22}
                  className="invert opacity-90 text-reveal-y-3"
                  alt="arrow img not found"
                />
              </a>
            </div>
          </div>
          <ul className="font-brooklyn text-[0.8rem] leading-[2rem] text-reveal-ul-3">
            <li>
              Implemented socket for signalling to create a WebRTC connection.
            </li>
            <li>
              Established a socket connection using the useMemo hook to improve
              performance.
            </li>
            <li>
              Automatic negotiation between each of them is done by clicking the
              only connect button.
            </li>
            <li>
              The selected file is transmitted via the WebRTC data channel as
              raw binary data, which is converted using an ArrayBuffer.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;
