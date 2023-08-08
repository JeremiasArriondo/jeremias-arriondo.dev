import Image from "next/image";
import { IconGitHub } from "../Icons";
import { IconLinkedIn } from "../Icons/IconLinkedIn";
import { IconMessage } from "../Icons/IconMessage";

export const Hero = () => {
  return (
    <section
      className="background-gradient flex justify-center min-h-[calc(100vh-64px)]"
      aria-labelledby="hero-description"
    >
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <Image
            src="/images/hero2.webp"
            width={300}
            height={300}
            className="object-cover rounded-b-[32px] h-80 md:h-full border border-t-0 border-violetPrimary shadow-violetSecondary "
            priority={true}
            alt="Picture of the author"
          />
          <div className="md:w-96">
            <h1 className="dark:text-customGray-base text-3xl md:text-4xl">
              Hola, soy <br />
              <span className="text-5xl md:text-6xl font-bold text-violetPrimary">
                Jeremias Arriondo
              </span>
            </h1>
            <p className="my-2 text-xl text-slate-600 dark:text-slate-400">
              Full-Stack Developer
            </p>
            {/* <p
              className="my-4 text-customGray-dark dark:text-customGray-base"
              id="hero-description"
            >
              Bienvenid@ a mi web personal. <br /> Soy un entusiasta
              desarrollador de software y aquí podrás encontrar más sobre mi.
            </p> */}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="xs:text-center my-4 text-customGray-dark dark:text-customGray-base"
            id="hero-description"
          >
            {/* Bienvenid@ a mi pequeño universo. <br /> */}
            Soy un entusiasta desarrollador de software, buscando en todo
            momento nuevos desafíos y listo para una nueva aventura. Aquí podrás
            encontrar más sobre mi.
          </p>
        </div>
        <div className="flex justify-around my-8 xs:justify-center gap-4 xs:gap-16">
          <a
            href="https://www.linkedin.com/in/jeremias-arriondo/o"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir perfil de LinkedIn"
          >
            <IconLinkedIn
              width="3rem"
              height="3rem"
              className="transform cursor-pointer hover:scale-110 active:scale-95"
            />
          </a>
          <a
            href="https://github.com/JeremiasArriondo"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir perfil de GitHub"
          >
            <IconGitHub
              width="3rem"
              height="3rem"
              className="transform cursor-pointer hover:scale-110 active:scale-95"
            />
          </a>
          <a
            href="mailto:jeremiasarriondo98@gmail.com"
            aria-label="Enviar email"
          >
            <IconMessage
              width="3rem"
              height="3rem"
              className="transform cursor-pointer hover:scale-110 active:scale-95"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
