import React from "react";
import Footer from "../components/FooterLayout";

const Contact = () => {
  return (
    <>
    <section className="text-white py-[6rem]">
    <div className="fixed inset-0 -z-10">
          <div class="relative h-full w-full bg-black">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-4xl">
        <h1 className="text-2xl font-bold mb-8 border-b border-gray-300 py-2">Contact Us</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-black text-white border border-gray-400 px-4 py-2 focus:outline-none focus:border-white"
              placeholder="Name..."
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-black text-white border border-gray-400 px-4 py-2 focus:outline-none focus:border-white"
              placeholder="Phone..."
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-black text-white border border-gray-400 px-4 py-2 focus:outline-none focus:border-white"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full bg-black text-white border border-gray-400 px-4 py-2 focus:outline-none focus:border-white"
              placeholder="Your Message..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-[25%] bg-white text-black font-semibold py-2 px-4 hover:bg-gray-300"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Contact;
