"use client";
import Image from "next/image";
import ecommerce from "@/public/img/ecommerce.png";
import github from "@/public/svg/github.svg";
import arrow from "@/public/img/arrow.png";
import videocall from "@/public/img/videocall.png";
import filesharing from "@/public/img/filesharing.png";
import { useRef, useLayoutEffect, useEffect } from "react";
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
            trigger: ".reveal-left",
          },
        })
        .to(".reveal-left", 1, {
          "--myWidth": "0%",
          ease: Power2.easeInOut,
        })
        .to(".reveal-top", 1, {
          translateY: 0,
          ease: Power2.easeInOut,
          delay: -1,
        });

      const tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".reveal-left-2",
          },
        })
        .to(".reveal-left-2", 1, {
          "--myWidth": "0%",
          ease: Power2.easeInOut,
        })
        .to(".reveal-top-2", 1, {
          translateY: 0,
          ease: Power2.easeInOut,
          delay: -1,
        });

      const tl3 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".reveal-left-3",
          },
        })
        .to(".reveal-left-3", 1, {
          "--myWidth": "0%",
          ease: Power2.easeInOut,
        })
        .to(".reveal-top-3", 1, {
          translateY: 0,
          ease: Power2.easeInOut,
          delay: -1,
        });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={el} className="pt-28 px-28">
      <div>
        <h1 className="text-white text-center text-5xl">Projects</h1>
      </div>
      <div className="my-16 flex">
        <div>
          <Image
            width={450}
            height={500}
            src={ecommerce}
            priority={true}
            className="rounded-xl"
            alt="Ecommerce not found"
          />
        </div>
        <div className="ml-5">
          <div className="flex">
            <div className="overflow-hidden relative reveal-left">
              <h1 className="text-red-500 reveal-top">
                Built a Ecommerce platform
              </h1>
            </div>
            <div className="overflow-hidden relative reveal-left ml-5 flex">
              <a href="https://github.com/M1-salman/Ecommerce">
                <Image
                  src={github}
                  width={22}
                  height={22}
                  className="invert mr-5 opacity-90 reveal-top"
                  alt="github svg not found"
                />
              </a>
              <a href="https://ecommerce-m1-salman.vercel.app/">
                <Image
                  src={arrow}
                  width={22}
                  height={22}
                  className="invert opacity-90 -rotate-45 reveal-top"
                  alt="arrow img not found"
                />
              </a>
            </div>
          </div>
          <ul className="font-brooklyn text-sm opacity-90">
            <li className="my-2">
              Streamlined product management using Sanity CMS, making updates
              and modifications effortless.
            </li>
            <li className="my-2">
              Credential-based authentication through MongoDB and Google SignIn
              with OAuth 2.0 using NextAuth.
            </li>
            <li className="my-2">
              An efficient "Add to Cart" feature utilizing Redux Toolkit for
              seamless user experience.
            </li>
            <li className="my-2">
              A contact page that securely transmitted data to a MongoDB
              database.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-16 flex flex-row-reverse justify-between">
        <div>
          <Image
            width={450}
            height={500}
            src={videocall}
            priority={true}
            className="rounded-xl"
            alt="videocall img not found"
          />
        </div>
        <div>
          <div className="flex">
            <div className="overflow-hidden relative reveal-left-2">
              <h1 className="text-red-500 reveal-top-2">
                video call without a server
              </h1>
            </div>
            <div className="ml-5 overflow-hidden relative reveal-left-2 flex">
              <a href="https://github.com/M1-salman/WebRTC-VideoCall">
                <Image
                  src={github}
                  width={22}
                  height={22}
                  className="invert mr-5 opacity-90 reveal-top-2"
                  alt="github svg not found"
                />
              </a>
              <a href="https://ecommerce-m1-salman.vercel.app/">
                <Image
                  src={arrow}
                  width={22}
                  height={22}
                  className="invert opacity-90 -rotate-45 reveal-top-2"
                  alt="arrow img not found"
                />
              </a>
            </div>
          </div>
          <ul className="font-brooklyn text-sm opacity-90">
            <li className="my-2">
              Implemented WebRTC using Javascript to create a real-time
              communication.
            </li>
            <li className="my-2">
              Exchanged their SDP as an offer or answer between them to create a
              peer to peer connection.
            </li>
            <li className="my-2">
              After a successful negotiation of their SDP, they can share their
              local stream with each other.
            </li>
            <li className="my-2">
              Established error handling in the event of user disconnection
              using WebRTC data channel.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-16 flex">
        <div>
          <Image
            width={450}
            height={500}
            src={filesharing}
            priority={true}
            className="rounded-xl"
            alt="Ecommerce not found"
          />
        </div>
        <div className="ml-5">
          <div className="flex">
            <div className="overflow-hidden relative reveal-left-3">
              <h1 className="text-red-500 reveal-top-3">File sharing in raw binary data</h1>
            </div>
            <div className="ml-5 overflow-hidden relative reveal-left-3 flex">
              <a href="https://github.com/M1-salman/Ecommerce">
                <Image
                  src={github}
                  width={22}
                  height={22}
                  className="invert mr-5 opacity-90 reveal-top-3"
                  alt="github svg not found"
                />
              </a>
              <a href="https://ecommerce-m1-salman.vercel.app/">
                <Image
                  src={arrow}
                  width={22}
                  height={22}
                  className="invert opacity-90 -rotate-45 reveal-top-3"
                  alt="arrow img not found"
                />
              </a>
            </div>
          </div>
          <ul className="font-brooklyn text-sm opacity-90">
            <li className="my-2">
              Implemented socket for signalling to create a WebRTC connection.
            </li>
            <li className="my-2">
              Established a socket connection using the useMemo hook to improve
              performance.
            </li>
            <li className="my-2">
              Automatic negotiation between each of them is done by clicking the
              only connect button.
            </li>
            <li className="my-2">
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
