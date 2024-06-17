import Image from "next/image";

const Skill = () => {
  return (
    <section
      className="max-w-full lg:h-screen h-auto flex flex-col justify-center items-center"
      id="skills"
    >
      <h1 className="text-3xl sm:text-5xl text-center leading-[6rem]">
        Skills
      </h1>

      <div className="mt-12 flex flex-col items-center space-y-4">
        <div className="flex lg:flex-row flex-col lg:text-start text-center w-9/12 lg:space-y-0 space-y-8">
          <h2 className="lg:text-white text-red-500 lg:mr-2 mr-0">
            Frontend&nbsp;:
          </h2>
          <div className="flex lg:justify-start justify-center flex-wrap">
            {frontend.map((item, index) => (
              <span
                key={index}
                className="flex items-center bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 mx-2 transition-colors duration-200 hover:bg-gray-700"
              >
                {item.image && (
                  <Image
                    src={item.image}
                    width={22}
                    height={22}
                    alt={item.alt}
                    className={`inline-block mr-2 ${item.custom_style}`}
                  />
                )}
                {item.skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:text-start text-center w-9/12 lg:space-y-0 space-y-8">
          <h2 className="lg:text-white text-red-500 lg:mr-6 mr-0">
            Backend&nbsp;:
          </h2>
          <div className="flex lg:justify-start justify-center flex-wrap">
            {backend.map((item, index) => (
              <span
                key={index}
                className="flex items-center bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 mx-2 transition-colors duration-200 hover:bg-gray-700"
              >
                {item.image && (
                  <Image
                    src={item.image}
                    width={22}
                    height={22}
                    alt={item.alt}
                    className={`inline-block mr-2 ${item.custom_style}`}
                  />
                )}
                {item.skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:text-start text-center w-9/12 lg:space-y-0 space-y-8">
          <h2 className="lg:text-white text-red-500 lg:mr-14 mr-0">
            Tools&nbsp;:
          </h2>
          <div className="flex lg:justify-start justify-center flex-wrap">
            {tools.map((item, index) => (
              <span
                key={index}
                className="flex items-center bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 mx-2 transition-colors duration-200 hover:bg-gray-700"
              >
                {item.image && (
                  <Image
                    src={item.image}
                    width={22}
                    height={22}
                    alt={item.alt}
                    className={`inline-block mr-2 ${item.custom_style}`}
                  />
                )}
                {item.skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

const frontend = [
  {
    image: "/img/logos/html.svg",
    alt: "html-logo",
    skill: "HTML",
  },
  {
    image: "/img/logos/css.svg",
    alt: "css-logo",
    skill: "CSS",
  },
  {
    image: "/img/logos/javascript-js.svg",
    alt: "js-logo",
    custom_style: "w-5 rounded",
    skill: "Javascript",
  },
  {
    image: "/img/logos/react.svg",
    alt: "react-logo",
    skill: "ReactJs",
  },
  {
    skill: "NextJs",
  },
  {
    image: "/img/logos/zod.svg",
    alt: "zod-logo",
    custom_style: "w-7",
    skill: "Zod",
  },
  {
    skill: "React - hook - form",
  },
  {
    image: "/img/logos/tailwind-css.svg",
    alt: "tailwind-logo",
    custom_style: "w-6",
    skill: "TailwindCSS",
  },
  {
    image: "/img/logos/material-ui.svg",
    alt: "material-ui-logo",
    custom_style: "w-5",
    skill: "Material - ui",
  },
  {
    image: "/img/logos/bootstrap.svg",
    alt: "bootstrap-logo",
    custom_style: "w-5",
    skill: "Bootstrap",
  },
  {
    image: "/img/logos/redux.svg",
    alt: "redux-logo",
    custom_style: "w-5",
    skill: "Redux",
  },
  {
    custom_style: "w-5",
    skill: "Shadcn",
  },
  {
    skill: "Acertinity - ui",
  },
];

const backend = [
  {
    image: "/img/logos/node-js.svg",
    alt: "node-js-logo",
    custom_style: "w-4",
    skill: "Node Js",
  },
  {
    skill: "Express Js",
  },
  {
    image: "/img/logos/ejs.svg",
    alt: "ejs-logo",
    custom_style: "w-6",
    skill: "EJS",
  },
  {
    skill: "Sanity CMS",
  },

  {
    skill: "NextAuth - v5",
  },
  {
    image: "/img/logos/mongo.svg",
    alt: "mongo-db-logo",
    custom_style: "w-5",
    skill: "MongoDB",
  },
  {
    image: "/img/logos/mysql.svg",
    alt: "mysql-logo",
    custom_style: "w-6",
    skill: "MySQL",
  },
  {
    image: "/img/logos/postgresql.svg",
    alt: "postgresql-logo",
    custom_style: "w-5",
    skill: "PostgreSQL",
  },
  {
    image: "/img/logos/supabase.svg",
    alt: "supabase-logo",
    custom_style: "w-4",
    skill: "Supabase",
  },
  {
    image: "/img/logos/docker.svg",
    alt: "docker-logo",
    custom_style: "w-5",
    skill: "Docker",
  },
  {
    skill: "SEO",
  },
];

const tools = [
  {
    image: "/img/logos/vs-code.svg",
    alt: "vs-code-logo",
    skill: "VS Code",
  },
  {
    image: "/img/logos/git.svg",
    alt: "git-logo",
    skill: "Git",
  },
  {
    skill: "Github",
  },
  {
    image: "/img/logos/postman.svg",
    alt: "postman-logo",
    custom_style: "w-5",
    skill: "Postman",
  },

  {
    image: "/img/logos/linux.svg",
    alt: "linux-logo",
    skill: "Linux",
  },
  {
    image: "/img/logos/jest.svg",
    alt: "jest-logo",
    custom_style: "w-5",
    skill: "Jest",
  },
  {
    image: "/img/logos/react-testing-library.svg",
    alt: "react-testing-library-logo",
    custom_style: "w-5",
    skill: "React - testing - library",
  },
];
