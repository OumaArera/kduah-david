import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-blue-950 py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">Contact Us</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-5"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We’re here to help with all your business needs. Drop us a message or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Contact Form */}
          <div className="w-full px-4 sm:px-6 md:px-10 pb-8 overflow-x-hidden">

            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Send Us a Message</h3>
            <form
              className="space-y-5"
              action="mailto:k2dduahconsult2025@gmail.com"
              method="POST"
              encType="text/plain"
            >
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email Address", type: "email", placeholder: "Your email" },
                { id: "subject", label: "Subject", type: "text", placeholder: "Message subject" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-300"
                >
                Send Message
                </button>
            </form>
          </div>

          {/* Contact Details */}
            <div className="bg-blue-800 text-white p-8 md:p-10 flex flex-col items-center justify-between text-center">
            <div className="w-full max-w-md">
                <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
                <ul className="space-y-8">
                <li className="flex items-start space-x-4 text-left">
                    <div className="pt-1">
                    <MapPin className="text-orange-400" size={24} />
                    </div>
                    <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-blue-100">H/N 33, Tower School - Gbawe</p>
                    <p className="text-blue-100">Digital Address - GS -0047-3214</p>
                    <p className="text-blue-100">Accra - Ghana</p>
                    </div>
                </li>
                <li className="flex items-start space-x-4 text-left">
                    <div className="pt-1">
                    <Phone className="text-orange-400" size={24} />
                    </div>
                    <div>
                    <h4 className="font-medium mb-1">Telephone</h4>
                    <p className="text-blue-100">+233 240569889</p>
                    <p className="text-blue-100">+233 249099740</p>
                    <p className="text-blue-100">+1 3257030636</p>
                    </div>
                </li>
                <li className="flex items-start space-x-4 text-left">
                    <div className="pt-1">
                    <Mail className="text-orange-400" size={24} />
                    </div>
                    <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-blue-100">k2dduahconsult2025@gmail.com</p>
                    </div>
                </li>
                </ul>
            </div>

            <div className="w-full max-w-md mt-12 border-t border-blue-700 pt-6 text-center">
                <h4 className="font-medium mb-4">Business Hours</h4>
                <div className="text-blue-100 space-y-1">
                <p>Mon – Fri: 9:00 AM – 5:00 PM</p>
                <p>Saturday: 10:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
                </div>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
