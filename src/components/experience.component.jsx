import React from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState("firstTab");
  return (
    <section
      id="experience"
      className="h-screen snap-start pt-16 flex flex-col items-center justify-center gap-3"
    >
      <div className="flex">
        <div className="flex gap-2 items-center">
          <div className="border rounded-md px-1 border-emerald-300 text-emerald-300">02. </div>
          {"EXPERIENCE".split("").map((char, i) => (
            <kbd key={i} className="kbd">
              {char}
            </kbd>
          ))}
        </div>
        <div className="pl-3 hidden md:flex w-80 flex-col">
          <div className="divider"></div>
        </div>
      </div>

      <ul className="hidden xl:block timeline timeline-snap-icon max-md:timeline-compact timeline-vertical leading-[1.3]">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Jul 2025 - Present</time>
            <div className="text-lg font-black">Fujifilm Business Innovation Vietnam</div>
            <div className="textarea-md font-semibold">Software engineer</div>
            <div className="font-mono">
              Worked closely with cross-functional teams to enhance and develop new features for the
              MFP (Multi-Function Printer), with a strong emphasis on the Panel UI experience.
              Beyond feature development, I proactively created internal tools to improve team
              efficiency, including automated report generation solutions and browser extensions to
              simplify and standardize recurring tasks.
            </div>
            <div className="timeline-start pt-3 flex flex-wrap gap-2">
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                Vanilla JS
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                Jasmine JS
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                HTML & CSS
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">Astah</div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                PlantUML
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">Linux</div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">NodeJs</div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Apr 2022 - July 2025</time>
            <div className="text-lg font-black">Bosch global software company</div>
            <div className="textarea-md font-semibold">Frontend developer</div>
            <div className="font-mono">
              An internal project for Bosch, which use to raise e-forms for any kind of requests. My
              responsibilities include developing new features, maintaining the existing codebase.
              Moreover, I also work closely with the customers to understand their needs and provide
              solutions that meet their requirements which helps me to perform as the "Asscociate of
              the month" in Oct 2024
            </div>
            <div className="pt-3 flex flex-wrap gap-2">
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                Vanilla JS
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                HTML & CSS
              </div>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Jan 2021 - Mar 2022</time>
            <div className="text-lg font-black">Netcompany</div>
            <div className="textarea-md font-semibold">QA/QC</div>
            <a
              href="https://www.sedex.com/vn/"
              target="_blank"
              className="link text-emerald-300 block"
            >
              To the site
            </a>
            <div className="font-mono">
              Worked in a UK project named Sedex, which is a global web application that helps
              companies manage and improve their responsible sourcing practices. My responsibilities
              included testing the application, identifying and reporting bugs, and ensuring that
              the software met the required quality standards.
            </div>
            <div className="timeline-start pt-3 flex flex-wrap gap-2">
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                Manual testing
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">Postman</div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">Neo4j</div>
            </div>
          </div>
          <hr />
        </li>
      </ul>

      <div className="xl:hidden w-[95%] max-w-[800px]">
        <div className="tabs tabs-box">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label={
              activeTab === "firstTab" ? "Fujiflm Business Innovation Vietnam" : "Present Job"
            }
            checked={activeTab === "firstTab"}
            onChange={() => setActiveTab("firstTab")}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <time className="font-mono italic">Jul 2025 - Present</time>
            <div className="text-lg font-black">Fujifilm Business Innovation Vietnam</div>
            <div className="text-lg font-semibold text-emerald-300">Software engineer</div>
            <div className="font-mono">
              Worked closely with cross-functional teams to enhance and develop new features for the
              MFP (Multi-Function Printer), with a strong emphasis on the Panel UI experience.
              Beyond feature development, I proactively created internal tools to improve team
              efficiency, including automated report generation solutions and browser extensions to
              simplify and standardize recurring tasks.
            </div>
            <div className="timeline-start pt-3 flex flex-wrap gap-2">
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                Vanilla JS
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                Jasmine JS
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                HTML & CSS
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">Astah</div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                PlantUML
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">Linux</div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">C++</div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">NodeJs</div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label={activeTab === "secondTab" ? "Bosch global software" : "2nd Job"}
            checked={activeTab === "secondTab"}
            onChange={() => setActiveTab("secondTab")}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <time className="font-mono italic">Apr 2022 - July 2025</time>
            <div className="text-lg font-black">Bosch global software company</div>
            <div className="text-lg font-semibold text-emerald-300">Frontend developer</div>
            <div className="font-mono">
              An internal project for Bosch, which use to raise e-forms for any kind of requests. My
              responsibilities include developing new features, maintaining the existing codebase.
              Moreover, I also work closely with the customers to understand their needs and provide
              solutions that meet their requirements which helps me to perform as the "Asscociate of
              the month" in Oct 2024
            </div>
            <div className="pt-3 flex flex-wrap gap-2">
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                Vanilla JS
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                HTML & CSS
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label={activeTab === "thirdTab" ? "Netcompany" : "1st Job"}
            checked={activeTab === "thirdTab"}
            onChange={() => setActiveTab("thirdTab")}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <time className="font-mono italic">Jan 2021 - Mar 2022</time>
            <div className="text-lg font-black">Netcompany</div>
            <div className="text-lg font-semibold text-emerald-300">QA/QC</div>
            <a
              href="https://www.sedex.com/vn/"
              target="_blank"
              className="link text-emerald-300 block"
            >
              To the site
            </a>
            <div className="font-mono">
              Worked in a UK project named Sedex, which is a global web application that helps
              companies manage and improve their responsible sourcing practices. My responsibilities
              included testing the application, identifying and reporting bugs, and ensuring that
              the software met the required quality standards.
            </div>
            <div className="pt-3 flex flex-wrap gap-2">
              <div className="badge badge-outline border-emerald-300 text-emerald-300">
                Manual testing
              </div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">Postman</div>
              <div className="badge badge-outline border-emerald-300 text-emerald-300">Neo4j</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
