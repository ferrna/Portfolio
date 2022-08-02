import React from "react";

function Footer() {
  return (
    <div className="mt-7 py-5 bg-slate-700 dark:bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Fernando Arriondo
      </a>
      <span className="text-sm md:text-md hover:text-indigo-500">
        <a href="mailto:arriondovfernando@gmail.com">arriondovfernando@gmail.com - </a>
        <a href="https://www.linkedin.com/in/fernandoarriondo" target="_blanck">
          /in/fernandoarriondo
        </a>
      </span>
      <p className="text-xs mt-2 text-gray-500">
        Developed by{" "}
        <a href="https://github.com/ferrna" target="_blanck">
          ferrna
        </a>{" "}
        and{" "}
        <a href="https://github.com/ShaifArfan" target="_blanck">
          ShaifArfan
        </a>{" "}
        © Personal Portfolio {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
