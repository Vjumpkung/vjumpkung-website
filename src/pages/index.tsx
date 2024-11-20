import { Header } from "@/components/sections/header";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Head from "next/head";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export const projects = [
  {
    title: "SWU Loykrathong Online",
    link: "https://swu-loykrathong.online/",
    thumbnail: "/1731737753294.jpg",
  },
  {
    title: "Simple Image Manager",
    link: "https://github.com/vjumpkung/simple_image_manager_api",
    thumbnail:
      "https://github.com/vjumpkung/simple_image_manager_api/raw/master/images/upload_img.png",
  },
  {
    title: "Tshirt Latphrao 130",
    link: "https://www.tshirt130.com/",
    thumbnail: "/tshirt130.png",
  },
  {
    title: "Air Quality Report Frontend Remake",
    link: "https://air-quality-report-frontend-remake.netlify.app/",
    thumbnail: "/airq.png",
  },
  {
    title: "URL shortener",
    link: "https://vjump-short-url.vercel.app/",
    thumbnail: "/shrt.png",
  },
  {
    title: "Simple Calculator",
    link: "https://vjump-calculator.vercel.app/",
    thumbnail: "/calculator.png",
  },
  {
    title: "Pokedex Simple Search",
    link: "https://vjumpkung-simple-pokedex-search.netlify.app/",
    thumbnail: "/pokedex.png",
  },
  {
    title: "Hero Cartoon Tshirt Website",
    link: "https://www.herocartoontshirt.com/",
    thumbnail: "/hero.png",
  },
  {
    title: "Basic Shopping Website",
    link: "https://shopping.vjumpkung.dynv6.net/",
    thumbnail: "/basic-shopping-website.png",
  },
  {
    title: "Gened Credit Count",
    link: "https://gened-credit-count-frontend.vercel.app/",
    thumbnail: "/gened.png",
  },
  {
    title: "Bitly Clone",
    link: "https://bitly-clone-frontend.vercel.app/",
    thumbnail:
      "https://github.com/Vjumpkung/bitly-clone-frontend/raw/master/public/image.png",
  },
  {
    title: "Meeorder (Group Term Project)",
    link: "https://meeorder-frontend.vjumpkung.dynv6.net/",
    thumbnail: "/meeorder.gif",
  },
  {
    title: "Air Quality Report",
    link: "https://github.com/Vjumpkung/air-quality-report-backend",
    thumbnail: "/airq-backend.png",
  },
  {
    title: "Decryptor Game",
    link: "https://github.com/Vjumpkung/decryptor_game",
    thumbnail:
      "https://raw.githubusercontent.com/Vjumpkung/decryptor_game/master/image/startscreen.jpg",
  },
  {
    title: "Running Game",
    link: "https://github.com/Vjumpkung/Running-Game",
    thumbnail:
      "https://raw.githubusercontent.com/Vjumpkung/Running-Game/main/assets/screenshot.png",
  },
];

export const skills = [
  {
    alt: "React.js logo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    alt: "Next.js logo",
    img: "/nextjs-icon.svg",
  },
  {
    alt: "Node.js logo",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    alt: "JavaScript logo",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    alt: "TypeScript logo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    alt: "Tailwind CSS logo",
    img: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
  },
  {
    alt: "express",
    img: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  },
  {
    alt: "PostgreSQL logo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
  },
  {
    alt: "MongoDB logo",
    img: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    alt: "C logo",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    alt: "C++ logo",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    alt: "Python logo",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
  },
  {
    alt: "Prettier",
    img: "https://iconape.com/wp-content/files/zr/349997/svg/prettier-seeklogo.com.svg",
  },
  {
    alt: "git logo",
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    alt: "github logo",
    img: "/github-mark-white.svg",
  },
];

const Page = () => {
  return (
    <TracingBeam>
      <Head>
        <title>vjumpkung portfolio website</title>
      </Head>
      <main className="bg-black bg-dot-white/[0.2]">
        <div className="h-screen overflow-hidden antialiased relative flex flex-col justify-center">
          <Header />
        </div>
        <div className="h-full py-20 antialiased relative flex flex-col self-auto px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold text-white text-left">
              Projects
            </h1>
          </div>
          <div className="container mx-auto">
            <HoverEffect items={projects} />
          </div>
        </div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white text-left">
            Skills
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center h-80 w-full px-4 gap-x-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <Image
                src={skill.img}
                alt={skill.alt}
                width={60}
                height={60}
                loading="lazy"
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white text-left">
            Contacts
          </h1>
        </div>
        <div className="container w-screen mx-auto">
          <div className="flex items-center justify-center h-60 w-full gap-4">
            <SocialIcon
              url="https://github.com/Vjumpkung"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/chanrichpisitjing/"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://www.facebook.com/chanrich.pisitjing/"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </main>
    </TracingBeam>
  );
};

export default Page;
