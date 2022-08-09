import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";
import swal from "sweetalert";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_9so51ck", "template_vylwl7p", form.current, "xrIGwbytZnPTNohoY").then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        e.target.reset();
        swal({
          title: `Message sent`,
          icon: "success",
          button: "Ok!",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact">
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="h-[300px] grid grid-cols-1 md:grid-cols-[5fr_5fr_1fr] md:grid-rows-[20%_80%] gap-3 font-mono text-lg"
      >
        <input
          type="text"
          className="rounded-md w-full h-full drop-shadow-lg"
          name="user_name"
          placeholder="name"
        />
        <input
          type="email"
          className="rounded-md w-full h-full drop-shadow-lg align-top"
          name="user_email"
          placeholder="email"
        />
        <textarea
          className="rounded-md w-full h-full drop-shadow-lg md:col-span-2 align-text-top"
          name="message"
          placeholder="Your message"
        />
        <button
          className="md:writing-vertical-rl md:orientation-upright md:tracking-tighter text-slate-200 bg-slate-600 text-3xl md:row-start-1 md:col-start-3 md:row-span-3 rounded-md mb-3"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
