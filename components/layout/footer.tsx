export function Footer() {
  return (
    <footer
      className="mt-16 flex items-center justify-center gap-8
        bg-gray-50 dark:bg-customGray-dark w-full
        py-2 border-t border-gray-300 dark:border-customGray-dark"
    >
      <a
        href="mailto:jeremiasarriondo98@gmail.com"
        rel="noopener noreferrer"
        aria-label="Contacto mediante email"
        className="link"
      >
        Contacto
      </a>
      <a
        href="https://www.linkedin.com/in/jeremias-arriondo/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil de linkedIn"
        className="link"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/JeremiasArriondo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Perfil de GitHub JeremiasArriondo"
        className="link"
      >
        GitHub
      </a>
    </footer>
  );
}
