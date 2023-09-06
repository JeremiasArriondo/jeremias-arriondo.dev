import { WorkExperience } from "@/components/work-experience";

export const metadata = {
  title: "Otros desarrollos",
  description: "Conoce un poco más sobre mis retos, objetivos y enfoque.",
};

export default function MediaPage() {
  return (
    <main>
      <section className="background-gradient">
        <div className="container-section flow pt-8 md:pt-16">
          <h1 className="title dark:text-white">Otros desarrollos:</h1>
          <h2 className="text-xl xs:text-2xl text-black dark:text-white">
            Alguna playlist para escuchar?
          </h2>
          <div className="flex items-center gap-4 my-6 p-4 rounded-md bg-black">
            <div className="h-5 relative flex items-center">
              <div className="w-[3px] h-[3px] mr-1 bg-green-300 rounded-sm play" />
              <div className="w-[3px] h-[3px] mr-1 bg-green-300 rounded-sm play" />
              <div className="w-[3px] h-[3px] mr-1 bg-green-300 rounded-sm play" />
            </div>
            <div>
              <h3 className="text-green-300">The Nights</h3>
              <span className="text-gray-400">Avicii</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
