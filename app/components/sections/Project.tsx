"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

export function Project() {
  return (
    <section className="max-w-full overflow-y-hidden" id="projects">
      <h1 className="text-3xl sm:text-5xl text-center mb-12 leading-[6rem]">
        Projects
      </h1>
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
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 transition-colors duration-200 hover:bg-gray-700">
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
    </section>
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
    title: "Tenent",
    description: (
      <>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            Create and manage tenant profiles and Edit/Delete tenant info
            anytime.
          </li>
          <li>Generate and view monthly bills.</li>
          <li>Export tenant data as PDF (row/column format).</li>
          <li>View billing history in one place.</li>
          <li>Upload profile pictures (handled via Cloudinary + Multer).</li>
          <li>Admin Panel (only for me) to monitor all registered users.</li>
          <li>Dashboard to view manage tenants and quick insights.</li>
          <li>
            Fully validated data using Zod (frontend) and VineJS (backend).
          </li>
        </ol>
      </>
    ),
    badges: [
      {
        title: "Live",
        link: "https://tenent.vercel.app/",
      },
      {
        title: "Github",
        link: "https://github.com/M1-salman/tenent",
      },
    ],
    image: "/img/tenent.png",
  },
  {
    title: "Colour Trade Pro",
    description: (
      <>
        <ol className="list-decimal ml-6 space-y-1">
          <li>A 60-second global timer synced across all users.</li>
          <li>
            Users can trade once per round, with all trades processed when the timer ends.
          </li>
          <li>
            Choose a colour (Red, Green, Violet) and a number (0-9), place a
            trade, and also later you can view your trade history on the
            trade-history page.
          </li>
          <li>
            Fully functional wallet system with deposit, withdrawal (to bank),
            and one bank account you can link.
          </li>
          <li>Profile management with image upload via Cloudinary.</li>
          <li>
            Influenced outcomes using a house-edge algorithm (scam logic
            simulation).
          </li>
          <li>
            A full Admin Dashboard where the admin can view all user data and
            block wallets.
          </li>
        </ol>
      </>
    ),
    badges: [
      {
        title: "Live",
        link: "https://colour-trade-pro.vercel.app/",
      },
      {
        title: "Github",
        link: "https://github.com/M1-salman/colour-trade-pro",
      },
    ],
    image: "/img/trade.png",
  },
];

export default Project;
