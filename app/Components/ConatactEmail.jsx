"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { Inter } from "next/font/google";

// Import Tailwind CSS
import "tailwindcss/tailwind.css";

const inter = Inter({ subsets: ["latin"] });
console.log(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_USER_ID
);

const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <div id="Contact">
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Contact us to get in touch with us" />
        <meta name="keywords" content="contact, email, message" />
        <meta name="author" content="ali" />
      </Head>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-center mt-20">Contact <span className="text-blue-600 font-bold">Us</span></h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block mb-2" htmlFor="user_name">
              Name
            </label>
            <input
              className="border dark:border-none shadow-md p-2 w-full"
              type="text"
              id="user_name"
              name="user_name"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border p-2 w-full dark:border-none shadow-md"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="border p-2 w-full dark:border-none shadow-md"
              rows={8}
              id="message"
              name="message"
              required
            />
          </div>
          <button
            className="bg-black dark:bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
