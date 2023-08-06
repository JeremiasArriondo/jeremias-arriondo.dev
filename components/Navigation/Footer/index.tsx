export default function Footer() {
  return (
    <footer
      className="mt-16 flex items-center justify-center gap-8
        bg-customGray-base dark:bg-customGray-dark w-full
        py-2 border-t border-gray-300 dark:border-customGray-dark"
    >
      <a
        href="mailto:jeremiasarriondo98@gmail.com"
        rel="noopener noreferrer"
        aria-label="Contact"
        className="text-hover text-black dark:text-customGray-base"
      >
        Contacto
      </a>
      <a
        href="https://www.linkedin.com/in/jeremias-arriondo/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil de linkedIn"
        className="text-hover text-black dark:text-customGray-base"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/JeremiasArriondo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil de GitHub JeremiasArriondo"
        className="text-hover text-black dark:text-customGray-base"
      >
        GitHub
      </a>
    </footer>
  );
}
