"use client";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_qfuyh2n",
          "template_zdzrwtk",
          form.current,
          "fCvIWVVjHcV9RiMw3"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <section className="p-28 h-screen max-w-full" id="contact">
      <div>
        <h1 className="text-5xl text-center">Contact</h1>
      </div>
      <div className="h-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-full flex flex-col justify-evenly"
        >
          <div className="flex">
            <label htmlFor="user-name" className="text-3xl">
              Name
            </label>
            <input
              required
              type="text"
              id="user-name"
              name="user_name"
              className="p-2 ml-8 w-full bg-inherit border-b border-white font-brooklyn outline-none"
            />
          </div>
          <div className="flex">
            <label htmlFor="user-email" className="text-3xl">
              Email
            </label>
            <input
              required
              type="email"
              id="user-email"
              name="user_email"
              className="p-4 ml-6 w-full bg-inherit border-b border-white font-brooklyn outline-none"
            />
          </div>
          <div>
            <label htmlFor="user-msg" className="text-3xl block">
              Message
            </label>
            <textarea
              required
              id="user-msg"
              name="message"
              className="p-4 mt-8 w-full bg-inherit border border-white font-brooklyn"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-8 py-4 border-white border text-lg"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
