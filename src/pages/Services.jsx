import React from "react";

const services = [
  {
    id: "01",
    title: "Corporate Galas & Summits",
    description:
      "High-stakes logistics for international organizations. From state protocols in Entebbe to high-spec production in Kampala.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
  },
  {
    id: "02",
    title: "Private Weddings",
    description:
      "Editorial-grade celebrations. We curate the light, the movement, and the legacy of your day.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
  },
  {
    id: "03",
    title: "Bespoke Experiences",
    description:
      "Brand activations and private estate dinners where every shadow and scent is meticulously curated.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
  },
];

const ServiceCard = ({ id, title, description, image }) => (
  <div className="group relative border-b border-black/10 py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center overflow-hidden">
    {/* Service Number */}
    <div className="md:col-span-1">
      <span className="font-serif text-3xl italic opacity-30 group-hover:opacity-100 transition-opacity duration-500">
        {id}
      </span>
    </div>

    {/* Service Text */}
    <div className="md:col-span-5">
      <h3 className="font-serif text-4xl md:text-5xl mb-6 group-hover:italic transition-all duration-500">
        {title}
      </h3>
      <p className="font-sans text-sm tracking-wide leading-relaxed text-brand-grey max-w-sm">
        {description}
      </p>
    </div>

    {/* Floating Image Reveal */}
    <div className="md:col-span-6 relative h-64 md:h-96 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
      />
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      {/* DARK HERO SECTION 
          This provides the high-contrast background needed for your white NavBar text.
      */}
      <header className="relative text-brand-white pt-48 pb-32 px-8 md:px-24 overflow-hidden">
        {/* The Image Background Layer */}
        <img
          src="/assets/img/HeroBg.jpg"
          alt="Subtle dark background texture"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* A gradient overlay that ensures legibility and fades to black at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/70 to-brand-black pointer-events-none"></div>

        {/* Content Layer (Ensure relative is here so it sits on top) */}
        <div className="relative max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.8em] uppercase text-gray-400 mb-6 block">
            Our Capabilities
          </span>
          <h1 className="font-serif text-6xl md:text-8xl italic leading-tight">
            Bespoke <br />
            <span className="not-italic font-semibold text-white">
              Production
            </span>
          </h1>
          <p className="mt-8 max-w-lg font-sans text-gray-400 text-sm tracking-widest leading-relaxed">
            WE ARCHITECT MOMENTS THAT REMAIN. FROM GLOBAL SUMMITS TO PRIVATE
            ESTATES, WE BRING PRECISION AND ARTISTRY TO EVERY DETAIL.
          </p>
        </div>
      </header>

      {/* Main Services List */}
      <main className="max-w-7xl mx-auto px-8 md:px-24 py-20">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </main>

      {/* Bottom CTA */}
      <section className="text-center py-32 px-8 border-t border-black/5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="font-serif text-3xl italic mb-10">
            Ready to architect your next occasion?
          </p>
          <button className="bg-brand-black text-brand-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-brand-grey transition-all shadow-lg">
            Download Investment Guide
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
