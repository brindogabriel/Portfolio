import React, { FormEvent } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-gray-100 py-6 px-4 sm:px-6 lg:px-8"
      id="contacto"
    >
      <div className="w-screen max-w-lg mx-auto p-2 sm:p-6 lg:p-8 dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-200">
        <div className="flex items-center justify-center mb-8">
          <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-2" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Contactame
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/gabrielbrindo18@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200"
            >
              Tu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     focus:border-transparent transition-colors duration-200"
              placeholder="name@example.com"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     focus:border-transparent transition-colors duration-200 resize-none"
              placeholder="Escribí tu mensaje acá..."
            ></textarea>
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://www.gabrielbrindo.com.ar/thanks.html"
          />
          <input type="hidden" name="_template" value="table" />
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 
                   bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
                   text-white font-medium rounded-lg transition-colors duration-200
                   focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span>Enviar Email</span>
            <Send className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}
