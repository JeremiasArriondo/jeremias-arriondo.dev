import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="background-gradient flex justify-center"
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
            <p
              className="my-4 text-customGray-dark dark:text-customGray-base"
              id="hero-description"
            >
              Bienvenid@ a mi web personal. <br /> Soy un entusiasta
              desarrollador de software y aquí podrás encontrar más sobre mi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
