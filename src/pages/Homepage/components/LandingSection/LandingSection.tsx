import { Button } from '@mui/material';
import Navbar from '@app/components/Navbar/Navbar';
import React from 'react';
import bgHeroImage from '@app/assets/homepage/bg-hero.png';
import heroImage from '@app/assets/homepage/hero.png';
import { twMerge } from 'tailwind-merge';

const LandingSection = () => {
  return (
    <section
      className="relative h-full w-full overflow-auto md:px-48 lg:h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${bgHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="flex flex-col flex-wrap gap-16 max-md:mb-24">
        <Navbar />
        <div className="flex w-full flex-col flex-wrap items-center justify-between gap-6 lg:flex-row">
          <div className="flex flex-1 flex-col gap-2 px-10 md:px-0">
            <h1 className="max-w-[500px] whitespace-pre text-wrap text-center text-[38px] font-extrabold text-white md:text-start md:text-[62px]">
              Enjoy Our Delicious Meal
            </h1>
            <span className="text-center text-base text-white md:text-start">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
              et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </span>
            <Button
              onClick={() => {
                document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="contained"
              size="large"
              className={twMerge('!mt-4 !w-[200px] self-center !rounded-none md:self-start')}>
              Book A Table
            </Button>
          </div>
          <div className="flex flex-1 flex-row items-center justify-end max-md:mt-6">
            <img
              src={heroImage}
              alt="hero"
              className="animate-[spin_15s_linear_infinite] self-end max-md:h-[310px] max-md:w-[310px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
