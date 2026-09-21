import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-24 w-full max-w-3xl px-4 sm:mb-32 sm:px-6"
    >
      <SectionHeading eyebrow="Contact">Say hi</SectionHeading>

      <p className="tut-lede text-lg">
        Building in this space, or want to compare notes on agents? Reach me at{" "}
        <a className="ed-link" href="mailto:akashp1712@gmail.com">
          akashp1712@gmail.com
        </a>
        .
      </p>

      {/* <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form> */}
    </section>
  );
}
