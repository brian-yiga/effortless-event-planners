import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    category: 'Corporate',
    title: 'Global Tech Summit 2025',
    location: 'Speke Resort Convention Centre',
    description: 'A three-day immersive experience for 1,200 international delegates, featuring bespoke stage production and gala dinners.',
    image: '/assets/img/toddevents.png',
  },
  {
    id: 2,
    category: 'Wedding',
    title: 'The Entebbe Lakeside Union',
    location: 'Private Estate',
    description: 'An editorial-grade outdoor wedding focusing on botanical architecture and sunset choreography.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    category: 'Bespoke',
    title: 'Heritage Brand Launch',
    location: 'Kampala Art Gallery',
    description: 'A sensory brand activation where minimalist design met traditional luxury for an exclusive guest list.',
    image: '/assets/img/tableMics.jpg',
  },
  {
    id: 4,
    category: 'Corporate',
    title: 'Regional Banking Gala',
    location: 'Serena Hotel Ballroom',
    description: 'A black-tie evening celebrating excellence in finance, featuring custom light installations.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    category: 'Wedding',
    title: 'Modern Minimalist Vows',
    location: 'The Hills Mansion',
    description: 'Clean lines, monochromatic palettes, and a focus on intimate luxury and exceptional culinary flow.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Corporate', 'Wedding', 'Bespoke'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-brand-white">
      {/* HERO SECTION */}
      <header className="relative text-brand-white pt-48 pb-32 px-8 md:px-24 overflow-hidden">
        <img 
          src="/assets/img/portfolioBg.jpg" 
          alt="Portfolio background" 
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/70 to-brand-black pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto">
          <span className="text-[10px] tracking-[0.8em] uppercase text-gray-400 mb-6 block">
            Selected Works
          </span>
          <h1 className="font-serif text-6xl md:text-8xl italic leading-tight">
            Curated <br/> 
            <span className="not-italic font-semibold text-white">Archives</span>
          </h1>
          <p className="mt-8 max-w-lg font-sans text-gray-400 text-sm tracking-widest leading-relaxed">
            A VISUAL CHRONICLE OF ATMOSPHERES WE HAVE CRAFTED. FROM HIGH-SPEC SUMMITS 
            TO INTIMATE ESTATE CELEBRATIONS, DISCOVER THE ART OF PRECISION.
          </p>
        </div>
      </header>

      {/* FILTER NAVIGATION */}
      <nav className="max-w-7xl mx-auto px-8 md:px-24 py-12 flex flex-wrap gap-8 justify-center md:justify-start border-b border-black/5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 ${
              filter === cat ? 'text-brand-black border-b border-brand-black pb-1' : 'text-brand-grey hover:text-brand-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* PORTFOLIO GRID */}
      <main className="max-w-7xl mx-auto px-8 md:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group flex flex-col ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-4 left-4 bg-brand-white/90 backdrop-blur-sm px-4 py-1 text-[8px] tracking-[0.2em] uppercase font-bold text-brand-black">
                  {project.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <span className="text-[10px] tracking-widest text-brand-grey uppercase">
                  {project.location}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl group-hover:italic transition-all duration-500">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-brand-grey leading-relaxed max-w-md">
                  {project.description}
                </p>
                <button className="text-[10px] tracking-[0.3em] uppercase font-bold border-b border-transparent hover:border-brand-black transition-all pt-2">
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* NEXT STEP SECTION */}
      <section className="bg-brand-black text-brand-white py-32 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl italic mb-8">Let’s craft your legacy.</h2>
          <p className="text-gray-400 font-sans tracking-widest text-sm mb-12">
            WE ARE CURRENTLY ACCEPTING COMMISSIONS FOR LATE 2026 AND 2027.
          </p>
          <a 
            href="/contact" 
            className="inline-block border border-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-brand-black transition-all"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;