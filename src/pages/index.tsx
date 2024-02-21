import { Header } from "@/components/sections/header";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesCore } from "@/components/ui/sparkcles";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Head from "next/head";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export const projects = [
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
    title: "Meeorder",
    link: "https://github.com/meeorder/meeorder-frontend",
    thumbnail:
      "https://github.com/meeorder/meeorder-frontend/assets/90249534/b49b2f46-f952-4e95-9f91-08e7559621d9",
  },
  {
    title: "Airquality Report",
    link: "https://github.com/Vjumpkung/air-quality-report-backend",
    thumbnail: "/airq.png",
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

const Page = () => {
  return (
    <TracingBeam>
      <Head>
        <title>vjumpkung portfolio website</title>
      </Head>
      <main className="bg-black">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="h-screen py-40 overflow-hidden antialiased relative flex flex-col self-auto">
          <Header />
        </div>
        <div className="bg-dot-white/[0.2]">
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
            <div className="">
              <Image
                alt="React.js logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="Next.js logo"
                src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                className="invert"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="Node.js logo"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="JavaScript logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="TypeScript logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="Tailwind CSS logo"
                src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="express"
                src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="PostgreSQL logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="MongoDB logo"
                src="https://www.svgrepo.com/show/331488/mongodb.svg"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="C logo"
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="C++ logo"
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="Python logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="Prettier"
                src="https://iconape.com/wp-content/files/zr/349997/svg/prettier-seeklogo.com.svg"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="github logo"
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="github logo"
                className="invert"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold text-white text-left">
              Contacts
            </h1>
          </div>
          <div className="container w-screen mx-auto">
            <div className="flex items-center justify-center h-60 w-full gap-4">
              <SocialIcon url="https://github.com/Vjumpkung" />
              <SocialIcon url="https://www.linkedin.com/in/chanrichpisitjing/" />
              <SocialIcon url="https://www.facebook.com/chanrich.pisitjing/" />
            </div>
          </div>
        </div>
      </main>
    </TracingBeam>
  );
};

export default Page;
