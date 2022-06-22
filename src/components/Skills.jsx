import React from "react";
import SectionTitle from "./SectionTitle";
import { SkillsSetFront, SkillsSetBack, SkillsSetTools } from "./SkillsSet";

function Skills() {
  return (
    <section id="skills" className="mb-20 pt-4">
      <div className="flex justify-center mt-8">
        <SectionTitle>My skills</SectionTitle>
      </div>
      <article className="w-[100%] grid grid-cols-1 md:grid-cols-3 mx-auto justify-items-center">
        <div className="w-[290px] md:w-[220px] flex-column align-middle text-center mt-4">
          <SkillsSetFront />
        </div>
        <div className="w-[290px] md:w-[220px] flex-column align-middle text-center mt-4">
          <SkillsSetBack />
        </div>
        <div className="w-[290px] md:w-[220px] flex-column align-middle justify-between text-center mt-4">
          <SkillsSetTools />
        </div>
      </article>
    </section>
  );
}

export default Skills;
