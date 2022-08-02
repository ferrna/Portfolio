import React from "react";
import Typewriter from "typewriter-effect";

function ContactForm() {
  return (
    <div id="contact" className="  mx-auto max-w-4xl px-6">
      <div className=" bg-slate-300 rounded-md px-5 py-3 mb-5 text-lg">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "🤗Hello!,<br/> Do not hesitate to write to me, I will be happy to colaborate on your project, let me know how i can be of help. Greetings."
              )
              .start();
          }}
        />
      </div>
      <div className="h-[300px] grid grid-cols-1 md:grid-cols-[5fr_5fr_1fr] md:grid-rows-[20%_80%] gap-3 font-mono text-lg">
        <input type="text" className="rounded-md w-full h-full drop-shadow-lg" placeholder="name" />
        <input
          type="email"
          className="rounded-md w-full h-full drop-shadow-lg align-top"
          placeholder="email"
        />
        <textarea
          className="rounded-md w-full h-full drop-shadow-lg md:col-span-2 align-text-top"
          placeholder="Your message"
        />
        <button className="md:writing-vertical-rl md:orientation-upright md:tracking-tighter text-slate-200 bg-slate-600 text-3xl md:row-start-1 md:col-start-3 md:row-span-3 rounded-md mb-3">
          SEND
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
