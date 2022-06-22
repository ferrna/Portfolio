import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiWebmoney } from "react-icons/si";

function WorkItem({ imgUrl, title, tech, workUrl, liveUrl, description }) {
  return (
    <article className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden relative">
      <img src={imgUrl} alt="work" className="w-full h-36 md:h-48 object-cover" />
      <div className="w-full px-5 py-3 md:py-4 text-gray-600 dark:text-gray-300 ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 m-[0.1rem] md:m-0 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
      <div className="absolute z-10 opacity-0 hover:opacity-100 top-[0%] left-[0%] w-[100%] h-36 md:h-48 bg-[rgba(0,0,0,0.7)] text-indigo-400 p-6 flex flex-col justify-center items-center transition-all">
        <aside className="flex justify-around w-[50%] mx-auto">
          <a href={workUrl} target="_blank" rel="noreferrer" title="Repository">
            <VscGithub className="text-4xl mx-auto" />
            <p className="text-sm text-center">GitHub repo</p>
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer" title="Web site">
            <SiWebmoney className="text-4xl mx-auto" />
            <p className="text-sm text-center">Live demo</p>
          </a>
        </aside>
      </div>
    </article>
  );
}

export default WorkItem;
