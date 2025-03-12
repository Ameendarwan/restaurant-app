import AboutUs from './components/AboutUs';
import { Button } from '@mui/material';
import Menu from './components/Menu';
import ServiceCards from './components/ServiceCards';
import bgHeroImage from '@app/assets/homepage/bg-hero.png';
import heroImage from '@app/assets/homepage/hero.png';
import logo from '@app/assets/logo/logo.png';
import { twMerge } from 'tailwind-merge';

const Homepage = () => {
  return (
    <div className="relative">
      <div
        className="relative h-screen w-full overflow-auto md:px-48"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="flex flex-col flex-wrap gap-16 pt-4">
          <div className="flex w-full flex-row flex-wrap items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              <img src={logo} alt="logo" />
              <span className="font-mochiy text-3xl text-primary">FoodFront</span>
            </div>
            <div className="flex flex-row items-center">
              <Button>Home</Button>
              <Button>Contact</Button>
              <Button>Book A Table</Button>
            </div>
          </div>
          <div className="flex w-full flex-col flex-wrap items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-1 flex-col gap-2 px-10 md:px-0">
              <h1 className="max-w-[500px] whitespace-pre text-wrap text-center text-[62px] font-extrabold text-white md:text-start">
                Enjoy Our Delicious Meal
              </h1>
              <span className="text-center text-base text-white md:text-start">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </span>
              <Button variant="contained" className={twMerge('!mt-4 max-w-max self-center md:self-start')}>
                Book A Table
              </Button>
            </div>
            <div className="flex flex-1 flex-row items-center justify-end">
              <img src={heroImage} alt="hero" className="animate-[spin_15s_linear_infinite] self-end" />
            </div>
          </div>
        </div>
      </div>
      <ServiceCards />
      <AboutUs />
      <Menu />
    </div>
  );
};

export default Homepage;
