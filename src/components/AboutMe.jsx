import React from "react";
import SectionTitle from "./SectionTitle";

function AboutMe() {
  return (
    <div
      id="about"
      className=" bg-indigo-200 flex flex-col md:flex-row items-center justify-center py-12 px-2"
    >
      <div className="w-full md:w-8/12   max-w-4xl px-6">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-2xl text-indigo-600 dark:text-indigo-800 font-semibold">
          Soy desarrollador web Full Stack y apasionado del Front End, amante de los diseños simples y modernos. Soy una persona autodidacta y siempre que puedo intento aprender nuevas tecnologías.
          <br />
          <br />
          Actualmente me encuentro en aceleración Alkemy en donde realizamos un projecto para una ONG. Estoy buscando formar parte de un proyecto que me permita dejar mi marca en la web y me haga crecer profesionalmente.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
