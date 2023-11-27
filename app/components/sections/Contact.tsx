"use client";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [btnTextValue, setBtnTextValue] = useState("Send Message");
  const [isSending, setIsSending] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setIsSending(true);

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
            setBtnTextValue("Sent");
            setIsMessageSent(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section
      className="px-6 sm:px-12 md:px-20 lg:px-28 py-28 h-screen max-w-full"
      id="contact"
    >
      <div>
        <h1 className="text-3xl sm:text-5xl text-center">Contact</h1>
      </div>
      <div className="h-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-full flex flex-col justify-evenly"
        >
          <div className="flex flex-col sm:flex-row">
            <label htmlFor="user-name" className="text-xl sm:text-3xl">
              Name
            </label>
            <input
              required
              type="text"
              id="user-name"
              name="user_name"
              className="p-1 sm:p-2 ml-0 sm:ml-6 w-full bg-inherit border-b border-white font-brooklyn outline-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <label htmlFor="user-email" className="text-xl sm:text-3xl">
              Email
            </label>
            <input
              required
              type="email"
              id="user-email"
              name="user_email"
              className="p-1 sm:p-2 ml-0 sm:ml-4 w-full bg-inherit border-b border-white font-brooklyn outline-none"
            />
          </div>
          <div>
            <label htmlFor="user-msg" className="text-xl sm:text-3xl block">
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
              className="px-8 py-4 border-white border text-md sm:text-lg"
              disabled={isSending || isMessageSent}
            >
              {isSending ? "Sending..." : btnTextValue}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
