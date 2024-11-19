import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-blue-50 py-16" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have any questions? We'd love to hear from you. Let's work together to achieve your goals!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-700">Get in Touch</h3>
            <p className="text-gray-700">
              <span className="font-bold">Email:</span> hello@digishots.com
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Phone:</span> +1 (888) 429-9999
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Address:</span> 123 Main Street,
              Manhattan Valley, NY 94301
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
