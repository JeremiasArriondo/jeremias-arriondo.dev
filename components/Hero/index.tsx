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
          <div>
            <h1 className="dark:text-customGray-base text-2xl md:text-3xl">
              Hola, soy <br />
              <span className="text-5xl md:text-6xl font-bold text-violetPrimary">
                Jeremias Arriondo
              </span>
            </h1>
            <p className="my-2 text-xl md:text-3xl text-slate-600 dark:text-slate-400">
              Full-Stack Developer
            </p>
          </div>
        </div>
        <div className="my-12 md:text-xl text-customGray-dark dark:text-customGray-base">
          <p className="md:mt-24" id="hero-description">
            Bienvenid@ a mi página web, soy un entusiasta desarrollador <br />
            de software enfocado en resolver y construir soluciones tanto en el
            Frontend como en el Backend.
          </p>
          <p className="my-4">Aquí podrás conocer más sobre mi.</p>
        </div>
        {/* <div>
          <a
            className="p-2 border border-violetSecondary text-violet-300 hover:text-violetPrimary rounded-md"
            href="#"
          >
            Resumen - CV
          </a>
        </div> */}
        <div className="flex justify-around my-16 md:py-4 xs:justify-center gap-4 xs:gap-16">
          <a
            href="https://www.linkedin.com/in/jeremias-arriondo/o"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir perfil de LinkedIn"
          >
            <IconLinkedIn
              width="2rem"
              height="2rem"
              className="transform cursor-pointer hover:scale-150 hover:text-violetPrimary"
            />
          </a>
          <a
            href="https://github.com/JeremiasArriondo"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir perfil de GitHub"
          >
            <IconGitHub
              width="2rem"
              height="2rem"
              className="transform cursor-pointer hover:scale-150 hover:text-violetPrimary"
            />
          </a>
          <a
            href="mailto:jeremiasarriondo98@gmail.com"
            aria-label="Enviar email"
          >
            <IconMessage
              width="2rem"
              height="2rem"
              className="transform cursor-pointer hover:scale-150 hover:text-violetPrimary"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
