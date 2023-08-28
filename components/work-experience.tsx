import { workExperience } from "@/data/constants";
import React from "react";

export function WorkExperience() {
  return (
    <section className="mb-8">
      <ol className="flex flex-col gap-8 mb-8">
        {workExperience.map(
          ({ position, web, fromDate, toDate, details, tecnologies }) => {
            return (
              <li
                key={position}
                className="flex flex-col gap-2 xs:flex-row xs:gap-6"
              >
                <div className="min-w-[120px]">
                  <p className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {fromDate} - {toDate}
                  </p>
                </div>
                <div className="max-w-xl">
                  <a
                    href={web}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block xs:text-xl mb-2 hover:text-bluePrimary"
                  >
                    {position}
                  </a>
                  <ul>
                    {details.map(({ functionStack, detail }) => {
                      return (
                        <li key={detail}>
                          <p className="text-sm xs:text-base text-gray-500 dark:text-gray-400">
                            <span className="text-slate-600 dark:text-slate-300">
                              {functionStack}:{" "}
                            </span>
                            {detail}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">
                    {tecnologies}
                  </p>
                </div>
              </li>
            );
          }
        )}
      </ol>
    </section>
  );
}
