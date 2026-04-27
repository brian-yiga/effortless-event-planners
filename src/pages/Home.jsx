import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      {/* Navbar is now handled by App.jsx, so it's gone from here! */}

      <main className="flex-grow">
        {/* --- HERO SECTION --- */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfg95me4SOZDHXFZa8C5nSpZgyKUQccmDxGJn0ru8rIEAFU1ih7Qqm5HjLRiFBZwJ4m6eLgt3sDshK2fUIqA6AbftOqY3aFbcfRsK84dog9CSTj7Dpi0zk6SIGJXCmYU_M7KNiMdLREqkTVM2MOGNbbbJ0bhKoiBXlDVYRTkZ8aJ6-LAy6rqta9N4VS-rx_-ppC9bDJRBBrhOMnw0BanjtFquwtaBSNz_sfYRjZq2GgHj0GJuMGftN6T6wf0BOFbJq7lrYhQ8jPFos" 
              className="w-full h-full object-cover animate-subtle-zoom grayscale brightness-[0.4]"
              alt="Luxury Event"
            />
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <h1 className="font-serif text-white text-5xl md:text-8xl leading-tight mb-8 animate-fade-in-up">
              Crafting <span className="italic">Unforgettable</span> <br />
              <span className="font-bold tracking-tight">Moments.</span>
            </h1>
            <p className="text-white/80 font-sans text-sm md:text-lg tracking-widest uppercase mb-12 max-w-2xl mx-auto leading-relaxed">
              Precision planning meet creative soul. We engineer the atmosphere for Uganda's most significant celebrations.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-black px-12 py-5 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-brand-grey hover:text-white transition-all text-center">
                Plan Your Event
              </Link>
              <Link to="/portfolio" className="border border-white/50 text-white px-12 py-5 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white hover:text-black transition-all text-center">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* --- DETAILED WHAT WE DO --- */}
        <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] tracking-[0.6em] text-brand-grey uppercase mb-4 block">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-6xl italic">The Pillars of Effortless.</h2>
          </div>

          <div className="space-y-32">
            {/* Corporate */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvRUuBo2gWpmGGz6Za0sz41-KJR-LJt1uv3H5Hl79y9ahDt92T8q56kJtt9Eofso3m4lPZ5rEh5jdylN-k0NR3JIm8IHeRNpp1e0heQx98MlglIP7j4EO1fkFnzyPO_PITNfvFGCZlAbbzeM8qfZkzWjUf5g50nXkcgtPqBPJyrtljaxSEttBtlF1wHC0p5YlBDHpcBZkOA-EVrFpsoAVEAEy5OWj4hFOckQhQKxc_xKsVY23x0hyHnnzxM6JvazMq3ZV-GxX7ODH-" className="w-full aspect-[4/5] object-cover grayscale shadow-2xl" alt="Corporate Gala"/>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h3 className="font-serif text-4xl md:text-5xl">Corporate Galas & <br/>High-Stakes Summits</h3>
                <p className="text-brand-grey leading-relaxed italic border-l-4 border-brand-black pl-6">
                  "When the stakes are global, the execution must be clinical."
                </p>
                <p className="text-brand-grey font-light leading-relaxed">
                  We handle the logistical choreography for Uganda's leading organizations. Our end-to-end management includes state protocol, venue sourcing in high-security environments, and high-spec audiovisual production.
                </p>
                <ul className="text-[10px] tracking-widest uppercase font-bold grid grid-cols-2 gap-4 pt-4">
                  <li>• Protocol Management</li>
                  <li>• Guest Logistics</li>
                  <li>• Technical Production</li>
                  <li>• Vendor Curation</li>
                </ul>
              </div>
            </div>

            {/* Weddings */}
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="md:w-1/2">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvMjTN4ByJ8ZuRJmVAbF7Q__jfqhUmo8AkGaUQem3slBHuhHxJBTeYb3NHvHWzDVjmu-WlerS3SXZLr6qmZKB3O8phkNmcmcHnrLqsSwr4NcPFGwnJTLHmNpvmiDxTR-OWVlYfIDrzvpIfrLBeEBFiAgh7Yrc-klTnt3_StCPYlw4OhPbvEIkbXyoQXsJCv5x-ukDyPGL8k716mI5f4rebMYcYTnbwbDhGk1wqbpWKfPwmRg_0vYTpFBO9osyAdTXVs7Orb4UMnSkR" className="w-full aspect-[4/5] object-cover grayscale shadow-2xl" alt="Luxury Wedding"/>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h3 className="font-serif text-4xl md:text-5xl italic">Private Weddings</h3>
                <p className="text-brand-grey font-light leading-relaxed">
                  Bespoke isn't just a word; it's our baseline. We specialize in editorial-grade weddings that capture the unique legacy of a couple. From floral architecture and custom draping to meticulous day-of coordination.
                </p>
                <Link to="/services" className="inline-block text-[10px] tracking-widest uppercase font-bold border-b border-black pb-2 hover:opacity-50 transition-opacity">
                  Explore Wedding Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- PORTFOLIO TEASER GRID --- */}
        <section className="bg-brand-black py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-white">
              <h2 className="font-serif text-5xl md:text-7xl italic">The Archives</h2>
              <p className="text-white/50 text-[10px] tracking-[0.4em] uppercase mt-4">A glimpse into recent productions</p>
            </div>
            <Link to="/portfolio" className="text-white text-[10px] tracking-widest uppercase border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all">
              View Full Portfolio
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
            <div className="h-80 md:h-[500px] bg-brand-grey overflow-hidden group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvnHdOfT96kajadFBeTUPqs5UiWzOkaaewpf9wL5bY6C3kw7ruAwiNI8PLz-wPaBD62Na2YoOx35WwJUjCNAsePPhxcY6WRx7X4DV118VMheaJ8XTiX04THl93uXofV4a7yUUWtDyllIH80jXXHydtaODpTx2y_BvF2uYwCAKyhj0IUGZ3hn08Yt4N8iUxx5Rr8n4sGT07o0-h0Q4PxGnGJ_xkAPu2WvWi264RTEdpDUTRl8CpD24ypytBhBuktBORoeNw8ricw3XP" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" alt="Archive 1"/>
            </div>
            <div className="h-80 md:h-[500px] bg-brand-grey overflow-hidden group md:mt-12">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2xXAKWgB7mAx7NctdzADEAcfazKq1GOUVVW_A9TlxmT8OXvW2EYSfWrZ9vmavj6IQFOwNkxk55cHB7cn1fDg2y0GP6CKw0fOUXS7zCWhk21cvvAWBZnyRVA5MaMbs2_1CEDNHmzSaURRzfFiYyeGmmg4Eqp6lXHqmTQHW3J2CSXNO_ccp6IsGg92bnPiwJ13qKfkBcmY_gC4zWRX92fk-mVbjwgFn4si-L__xVdMBD-pVgRtjSPG-0Ux3zXKqxG8-4NRsOZGzplnN" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" alt="Archive 2"/>
            </div>
            <div className="h-80 md:h-[500px] bg-brand-grey overflow-hidden group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvRUuBo2gWpmGGz6Za0sz41-KJR-LJt1uv3H5Hl79y9ahDt92T8q56kJtt9Eofso3m4lPZ5rEh5jdylN-k0NR3JIm8IHeRNpp1e0heQx98MlglIP7j4EO1fkFnzyPO_PITNfvFGCZlAbbzeM8qfZkzWjUf5g50nXkcgtPqBPJyrtljaxSEttBtlF1wHC0p5YlBDHpcBZkOA-EVrFpsoAVEAEy5OWj4hFOckQhQKxc_xKsVY23x0hyHnnzxM6JvazMq3ZV-GxX7ODH-" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" alt="Archive 3"/>
            </div>
            <div className="h-80 md:h-[500px] bg-brand-grey overflow-hidden group md:mt-12">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvMjTN4ByJ8ZuRJmVAbF7Q__jfqhUmo8AkGaUQem3slBHuhHxJBTeYb3NHvHWzDVjmu-WlerS3SXZLr6qmZKB3O8phkNmcmcHnrLqsSwr4NcPFGwnJTLHmNpvmiDxTR-OWVlYfIDrzvpIfrLBeEBFiAgh7Yrc-klTnt3_StCPYlw4OhPbvEIkbXyoQXsJCv5x-ukDyPGL8k716mI5f4rebMYcYTnbwbDhGk1wqbpWKfPwmRg_0vYTpFBO9osyAdTXVs7Orb4UMnSkR" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" alt="Archive 4"/>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-32 px-6 bg-brand-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-4xl mb-8 opacity-20">format_quote</span>
            <p className="font-serif text-3xl md:text-4xl italic leading-relaxed mb-12">
              "Effortless transformed our vision into an atmosphere we didn't think was possible in Kampala."
            </p>
            <div className="w-12 h-[1px] bg-black mx-auto mb-6"></div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold">The Uganda Summit Committee</h4>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl tracking-[0.2em] uppercase mb-6">Effortless</h2>
            <p className="text-white/40 font-light max-w-sm mb-8 leading-relaxed text-sm">
              Architecting luxury experiences and high-stakes events across East Africa.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-widest uppercase font-bold mb-6 opacity-30">Quick Links</h4>
            <div className="flex flex-col gap-4 text-sm font-light">
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Archives</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-widest uppercase font-bold mb-6 opacity-30">Contact</h4>
            <div className="text-sm font-light space-y-2">
              <p>Kampala, Uganda</p>
              <p>inquiry@effortless.ug</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;