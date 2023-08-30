import Image from "next/image";
import { IconGitHub } from "./Icons/IconGitHub";
import { IconLinkedIn } from "./Icons/IconLinkedIn";
import { IconMessage } from "./Icons/IconMessage";

export const Hero = () => {
  return (
    <section
      className="background-gradient flex justify-center"
      aria-labelledby="hero-description"
    >
      <div className="container-section">
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <Image
            src="/images/avatar-squared.webp"
            width={200}
            height={200}
            className="inline-flex object-cover overflow-hidden rounded-full shadow-violetSecondary "
            alt="Picture of the author"
            priority
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
        <p className="my-4">Encuentrame en</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/JeremiasArriondo"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir perfil de GitHub"
            className="flex items-center linked"
          >
            <IconGitHub
              width="1.5rem"
              height="1.5rem"
              className="text-gray-600 dark:text-customGray-base"
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeremias-arriondo"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir perfil de LinkedIn"
            className="flex items-center linked"
          >
            <IconLinkedIn
              width="1.5rem"
              height="1.5rem"
              className="text-gray-600 dark:text-customGray-base"
            />
            LinkedIn
          </a>

          <a
            href="mailto:jeremiasarriondo98@gmail.com"
            aria-label="Enviar email"
            className="flex items-center linked"
          >
            <IconMessage
              width="1.5rem"
              height="1.5rem"
              className="text-gray-600 dark:text-customGray-base"
            />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};
