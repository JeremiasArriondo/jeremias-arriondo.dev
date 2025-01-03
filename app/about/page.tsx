import { WorkExperience } from "@/components/work-experience";

export const metadata = {
  title: "Sobre mi",
  description: "Conoce un poco más sobre mis retos, objetivos y enfoque.",
};

const programStartDate = '2021-08-02';

export default function AboutPage() {
  function calculateYearsFromDate(startDate = programStartDate) {
    const start = new Date(startDate); 
    const today = new Date();    
    let yearsDifference = today.getFullYear() - start.getFullYear();
    if (
        today.getMonth() < start.getMonth() || 
        (today.getMonth() === start.getMonth() && today.getDate() < start.getDate())
    ) {
        yearsDifference--;
    }
    return yearsDifference;
  }
  const years = calculateYearsFromDate();
  
  return (
    <main>
      <section className="background-gradient">
        <div className="container-section flow pt-8 md:pt-16">
          <h1 className="title dark:text-white">Conoce un poco más sobre mi</h1>
          <h2 className="text-xl xs:text-2xl text-black dark:text-white">
            Hola! 👋
          </h2>
          <p>
            Me llamo Jeremias Arriondo, y soy desarrollador de software. Comencé
            en esta profesión hace aproximadamente {years} años.
            
          </p>
          <h3 className="text-xl xs:text-2xl text-black dark:text-white">
            Enfoque y objetivos 🎯
          </h3>
          <p>
            Mi enfoque principal se centra en emprender nuevos retos.
            Actualmente, trabajo con tecnologías como React, Next.js, Golang,
            AWS y Mulesoft. <br /> Y mantengo el objetivo fundamental de poder
            colaborar y aprender en cada situación.
          </p>
          <p>
            Como desarrollador, busco evolucionar constantemente. Es necesario
            mantenerse actualizado con las últimas tecnologías y tendencias.
            Este desafío es lo que me apasiona y me impulsa a seguir aprendiendo
            y desarrollándome.
          </p>
          <h3 className="text-xl xs:text-2xl text-black dark:text-white">
            Experiencia laboral 👨‍💻
          </h3>
          <WorkExperience />
          <h3 className="text-xl xs:text-2xl text-black dark:text-white">
            Educación 📓
          </h3>
          <p>
            Me especialicé en desarrollo de sistemas informáticos en la
            universidad{" "}
            <a
              href="https://sitio.unnoba.edu.ar/"
              className="linked"
              rel="noopener noreferrer"
              target="_blank"
            >
              UNNOBA
            </a>
            , pero también me considero autodidacta. Por eso, valoro el esfuerzo
            de los demás profesionales que comparten su conocimiento día a día.
          </p>
          <p>Actualmente me encuentro estudiando la Licenciatura en Informática en la{" "}  
            <a
              href="https://21.edu.ar/"
              className="linked"
              rel="noopener noreferrer"
              target="_blank"
            >
              Universidad del Siglo 21
            </a>.
           </p>
          <h3 className="text-xl xs:text-2xl text-black dark:text-white">
            Contactame 📬
          </h3>
          <p>
            Si estás buscando un desarrollador de software confiable para
            diseñar ideas y llevarlas a cabo, no dudes en{" "}
            <a href="mailto:jeremiasarriondo98@gmail.com" className="linked">
              contactarme
            </a>
            . Gracias por tomarte el tiempo para aprender más sobre mi.
          </p>
        </div>
      </section>
    </main>
  );
}
