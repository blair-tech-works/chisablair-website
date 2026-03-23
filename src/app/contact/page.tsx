"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    eventType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Chisa Blair Weddings & Events. I will be in touch soon. Cheers!");
  };

  return (
    <section className="py-16 md:py-24 px-[6%]">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-[46px] font-medium mb-4 text-center leading-[1.33]">
          Contact Us
        </h1>
        <p className="text-lg leading-8 font-light mb-4 text-center">
          Contact us to schedule your FREE consultation. Complete the form, or
          send an email. Be sure to include your event date and the anticipated
          number of guests.
        </p>
        <p className="text-lg font-light mb-10 text-center italic">
          No Stress - Just Enjoy.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-light mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-light mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-base font-light mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-base font-light mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label className="block text-base font-light mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-light mb-2">
                Event Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-base font-light mb-2">
                Estimated # of Guests <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-base font-light mb-2">
              Event Type <span className="text-red-500">*</span>
            </label>
            <select
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors bg-white"
            >
              <option value="">Select an event type</option>
              <option value="casa-vino">Casa Vino Wine Pairing</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate</option>
              <option value="nonprofit">Nonprofit</option>
              <option value="private">Private Event</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-base font-light mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell us about your event?"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-base font-light focus:outline-none focus:border-black transition-colors resize-none"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn-primary cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
