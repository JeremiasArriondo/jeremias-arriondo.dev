import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import { IconRocket } from "./Icons/IconRocket";

export function BannerContact() {
  return (
    <div className="p-4 rounded-xl bg-gray-50 dark:bg-customGray-dark flex flex-col gap-4 shadow-xl shadow-violet-400/20 dark:border dark:border-gray-800">
      <div className="flex items-center gap-2">
        <IconRocket className="animate-bounce" />
        <h3>Trabajemos juntos!</h3>
      </div>
      <p className="text-base text-gray-500 dark:text-gray-400">
        Si estás buscando un compañero de trabajo remoto, no dudes en enviarme
        un correo electrónico.
      </p>
      <ViewTransition name="title-contact">
        <Link
          href="/contact"
          className="self-start inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-violetPrimary/30 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Contactame
          </span>
        </Link>
      </ViewTransition>
    </div>
  );
}
