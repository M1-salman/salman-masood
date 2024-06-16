"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

export function Project() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {/* map for project content */}
        {projectContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 md:ml-0 ml-4">
            {/* map for project content - badges */}
            {item.badges.map((badge, badgeIndex) => (
              <a
                key={badgeIndex}
                target="_blank"
                href={badge.link}
                className="inline-block mr-4"
              >
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {badge.title}
                </h2>
              </a>
            ))}
            <p className={"text-red-500 text-xl mb-4"}>{item.title}</p>
            <div className="text-sm  prose prose-sm dark:prose-invert font-cal-sans">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const projectContent = [
  {
    title: "Collabard",
    description: (
      <>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            Implementation of Stream SDK for robust video call that handle up to
            25 individuals simultaneously.
          </li>
          <li>
            Protected against XSS and SQL injection attacks, ensuring a secure
            user experience.
          </li>
          <li>
            Secure and user-friendly authentication flow using NextAuth-v5 and
            OAuth.
          </li>
          <li>Efficient data handling with PostgreSQL and Prisma ORM.</li>
          <li>
            High-quality, thoroughly tested codebase using Jest and React
            Testing Library.
          </li>
          <li>
            Docker integration for streamlined deployment and scalability.
          </li>
        </ol>
      </>
    ),
    badges: [
      {
        title: "Live",
        link: "https://collabard.vercel.app/",
      },
      {
        title: "Github",
        link: "https://github.com/M1-salman/collabard.git",
      },
    ],
    image: "/img/collabard.png",
  },
  {
    title: "Built a Ecommerce platform",
    description: (
      <>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            Streamlined product management using Sanity CMS, making updates and
            modifications effortless.
          </li>
          <li>
            Credential-based authentication through MongoDB and Google SignIn
            with OAuth 2.0 using NextAuth.
          </li>
          <li>
            An efficient &nbsp;&quot;Add to Cart&quot;&nbsp; feature utilizing
            Redux Toolkit for seamless user experience.
          </li>
          <li>
            A contact page that securely transmitted data to a MongoDB database.
          </li>
        </ol>
      </>
    ),
    badges: [
      {
        title: "Live",
        link: "https://ecommerce-m1-salman.vercel.app/",
      },
      {
        title: "Github",
        link: "https://github.com/M1-salman/Ecommerce.git",
      },
    ],
    image: "/img/ecommerce.png",
  },
  {
    title: "File sharing in raw binary data",
    description: (
      <>
        <ol className="list-decimal ml-6 space-y-1">
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
            The selected file is transmitted via the WebRTC data channel as raw
            binary data, which is converted using an ArrayBuffer.
          </li>
        </ol>
      </>
    ),
    badges: [
      {
        title: "Github",
        link: "https://github.com/M1-salman/WebRTC-FileTransfer.git",
      },
    ],
    image: "/img/file-sharing.png",
  },
];

export default Project;
