import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-brand-white flex flex-col items-center justify-center px-8 text-center">
      <div className="max-w-2xl">
        <span className="text-[10px] tracking-[0.8em] uppercase text-brand-grey mb-8 block">
          Inquiry Received
        </span>
        <h1 className="font-serif text-5xl md:text-7xl italic mb-8">
          Thank <span className="not-italic font-semibold">You.</span>
        </h1>
        <p className="font-sans text-sm tracking-widest text-brand-grey leading-loose uppercase max-w-md mx-auto mb-12">
          Your vision has reached us. A member of our production team will review your details and reach out within 48 hours to discuss the next steps.
        </p>
        <Link 
          to="/" 
          className="inline-block border border-black px-12 py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-brand-black hover:text-brand-white transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;