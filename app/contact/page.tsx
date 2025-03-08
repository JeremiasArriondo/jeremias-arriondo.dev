import { ContactForm } from "@/components/contact-form";
import { IconGitHub } from "@/components/Icons/IconGitHub";
import { IconLinkedIn } from "@/components/Icons/IconLinkedIn";
import { IconMessage } from "@/components/Icons/IconMessage";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata = {
  title: "Contactame",
  description: "Escribime en cualquiera de mis medios de contacto",
};

export default function ContactPage() {
  return (
    <main>
      <section className="background-gradient">
        <div className="container-section flow pt-8 md:pt-16">
          <ViewTransition name="title-contact">
            <h1 className="title dark:text-white">Contáctame</h1>
          </ViewTransition>
          <p>
            👋 ¿Tienes una idea, un proyecto o simplemente quieres conversar?
            Escríbeme y con gusto responderé lo antes posible. ¡Estoy listo para
            trabajar contigo!
          </p>
          <div className="my-8">
            <h2 className="subtitle">
              También puedes escribirme en cualquiera de mis redes:
            </h2>
            <div className="flex flex-wrap gap-4 my-4">
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
        </div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="subtitle text-center">Envíame un mensaje</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
