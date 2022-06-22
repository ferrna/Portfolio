import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

function IconAndName({ name, Icon }) {
  return (
    <article className="flex-column align-middle max-w-[100px] mb-2">
      <Icon
        id={name.replace(" ", "")}
        className="text-indigo-500 dark:text-blue-400 text-7xl m-0 mx-auto"
      />
      <h4 className="inline break-words dark:text-gray-300">{name}</h4>
    </article>
  );
}

function SkillSetTitle({ title }) {
  return (
    <h3 className="text-xl mb-5 font-semibold bg-slate-300 dark:bg-slate-800 rounded-md text-gray-600 dark:text-gray-300 ">
      {title}
    </h3>
  );
}

export function SkillsSetFront() {
  return (
    <div>
      <SkillSetTitle title="Frontend" />
      <div className="grid grid-cols-3 md:grid-cols-2">
        <IconAndName name="HTML" Icon={FaHtml5} />
        <IconAndName name="CSS" Icon={FaCss3Alt} />
        <IconAndName name="React" Icon={FaReact} />
        <IconAndName name="Redux" Icon={SiRedux} />
        <IconAndName name="Tailwind" Icon={SiTailwindcss} />
        <IconAndName name="Styled components" Icon={SiStyledcomponents} />
      </div>
    </div>
  );
}

export function SkillsSetBack() {
  return (
    <div>
      <SkillSetTitle title="Backend" />
      <div className="grid grid-cols-3 md:grid-cols-2">
        <IconAndName name="Javascript" Icon={SiJavascript} />
        <IconAndName name="Node js" Icon={SiNodedotjs} />
        <IconAndName name="Express" Icon={SiExpress} />
        <IconAndName name="Sequelize" Icon={SiSequelize} />
        <IconAndName name="PostgreSQL" Icon={SiPostgresql} />
      </div>
    </div>
  );
}
export function SkillsSetTools() {
  return (
    <div>
      <SkillSetTitle title="Tools" />
      <div className="grid grid-cols-3 md:grid-cols-1">
        <IconAndName name="Git" Icon={FaGitAlt} />
        <IconAndName name="NPM" Icon={FaNpm} />
        <IconAndName name="Postman" Icon={SiPostman} />
      </div>
    </div>
  );
}
export function SkillsSetLearning() {
  return (
    <div className="mt-4">
      <SkillSetTitle title="Currently learning" />
      <div className="grid grid-cols-3 md:grid-cols-3">
        <IconAndName name="Next js" Icon={SiNextdotjs} />
        <IconAndName name="Typescript" Icon={SiTypescript} />
      </div>
    </div>
  );
}
