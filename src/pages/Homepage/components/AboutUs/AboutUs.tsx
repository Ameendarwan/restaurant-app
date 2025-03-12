import { Button } from '@mui/material';
import React from 'react';
import aboutImage1 from '@app/assets/about/about-1.png';
import aboutImage2 from '@app/assets/about/about-2.png';
import aboutImage3 from '@app/assets/about/about-3.png';
import aboutImage4 from '@app/assets/about/about-4.png';

const AboutUs = () => {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-[#f1f8ff] px-48 py-16 lg:flex-row">
      {/* Image Grid */}
      <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
        <img src={aboutImage1} alt="Restaurant Interior" className="w-full rounded-lg" />
        <img src={aboutImage2} alt="Restaurant Seating" className="w-full rounded-lg" />
        <img src={aboutImage3} alt="Food Served" className="w-full rounded-lg" />
        <img src={aboutImage4} alt="Delicious Meal" className="w-full rounded-lg" />
      </div>

      {/* Text Content */}
      <div className="w-full text-center lg:w-1/2 lg:text-left">
        <p className="font-pacifico text-lg text-yellow-500">About Us</p>
        <h2 className="flex items-center justify-center gap-2 text-4xl font-bold text-gray-900 lg:justify-start">
          Welcome to <span className="text-yellow-500">🍴</span> Restoran
        </h2>
        <p className="mt-4 text-gray-600">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam ametdiam et eos erat ipsum et lorem et
          sit, sed stet lorem sit.
        </p>
        <p className="mt-4 text-gray-600">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
          lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-start">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="text-4xl font-bold text-yellow-500">13</h3>
            <p className="text-gray-600">Years of</p>
            <p className="font-bold uppercase text-gray-900">Experience</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="text-4xl font-bold text-yellow-500">50</h3>
            <p className="text-gray-600">Popular</p>
            <p className="font-bold uppercase text-gray-900">Master Chefs</p>
          </div>
        </div>
        <Button>Read More</Button>
      </div>
    </section>
  );
};

export default AboutUs;
