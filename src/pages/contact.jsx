import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzdyjqdo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Redirect to your custom success page
        navigate("/success");
      } else {
        setStatus("Oops! There was a problem. Please try again.");
      }
    } catch (error) {
      setStatus("Oops! There was a problem. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-white">
      {/* MINIMALIST DARK HEADER */}
      <header className="relative bg-brand-black text-brand-white pt-48 pb-20 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.8em] uppercase text-gray-400 mb-6 block">
            The First Step
          </span>
          <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
            Start a <br />
            <span className="not-italic font-semibold text-white">
              Conversation
            </span>
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 md:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT COLUMN: Contact Details */}
        <section className="space-y-16">
          <div>
            <h2 className="font-serif text-2xl italic mb-6">Our Studio</h2>
            <p className="font-sans text-sm tracking-widest text-brand-grey leading-loose uppercase">
              Plot 45, Akamwesi Complex
              <br />
              Kyebando Central, Kampala
              <br />
              Uganda
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl italic mb-6">Direct Reach</h2>
            <div className="space-y-4 font-sans text-sm tracking-widest text-brand-grey uppercase">
              <p>General: hello@effortless-events.com</p>
              <p>Inquiries: +256 700 000 000</p>
              <p>WhatsApp: +256 700 000 001</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl italic mb-6">Social</h2>
            <div className="flex gap-8 font-sans text-[10px] tracking-[0.3em] uppercase font-bold">
              <a href="#" className="hover:text-brand-grey transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-brand-grey transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-brand-grey transition-colors">
                Pinterest
              </a>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: The Form */}
        <section
          className="bg-gray-50 p-10 md:p-16 rounded-sm shadow-sm"
          id="contact-form"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-brand-grey">
                Full Name
              </label>
              <input
                name="full_name"
                type="text"
                required
                className="bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase font-bold text-brand-grey">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase font-bold text-brand-grey">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-all"
                  placeholder="+256 700 000 000"
                />
              </div>
            </div>

            {/* Event Type */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-brand-grey">
                Event Type
              </label>
              <select
                name="event_type"
                className="bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-all text-sm"
              >
                <option value="Corporate Gala">Corporate Gala / Summit</option>
                <option value="Private Wedding">Private Wedding</option>
                <option value="Bespoke Experience">Bespoke Experience</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Event Date */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-brand-grey">
                Event Date
              </label>
              <input
                name="event_date"
                type="text"
                className="bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-all"
                placeholder="Summer 2026"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-brand-grey">
                How can we help?
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-all resize-none"
                placeholder="Tell us about your vision..."
              ></textarea>
            </div>

            {status && (
              <p className="text-red-500 text-[10px] uppercase tracking-widest">
                {status}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-brand-black text-brand-white py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-brand-grey transition-all shadow-lg cursor-pointer"
            >
              Send Inquiry
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER AREA */}
      <footer className="py-12 border-t border-black/5 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-brand-grey">
          © 2026 Effortless Events Production
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;