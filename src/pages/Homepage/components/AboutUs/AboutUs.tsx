import { Button } from '@mui/material';
import aboutImage1 from '@app/assets/about/about-1.png';
import aboutImage2 from '@app/assets/about/about-2.png';
import aboutImage3 from '@app/assets/about/about-3.png';
import aboutImage4 from '@app/assets/about/about-4.png';

const AboutUs = () => {
  return (
    <section
      className="flex w-full flex-col items-center gap-6 px-6 pb-16 md:bg-lightBackground md:px-48 md:py-28 lg:flex-row"
      aria-labelledby="about-heading">
      {/* Image Grid */}
      <div className="grid w-full grid-cols-2 justify-center gap-4 lg:w-1/2" aria-label="Gallery of restaurant images">
        <img src={aboutImage1} alt="Restaurant Interior" className="w-full rounded-lg" />
        <img src={aboutImage2} alt="Restaurant Seating" className="aspect-1 w-[203px] self-end rounded-lg" />
        <img src={aboutImage3} alt="Food Served" className="aspect-1 ml-auto w-[203px] rounded-lg" />
        <img src={aboutImage4} alt="Delicious Meal" className="w-full self-start rounded-lg" />
      </div>

      {/* Text Content */}
      <div className="w-full md:text-center lg:w-1/2 lg:text-left">
        <span className="font-pacifico text-lg text-primary">About Us</span>
        <h2
          id="about-heading"
          className="flex items-center justify-center gap-2 text-[28px] font-bold text-text md:text-[40px] lg:justify-start">
          Welcome to <i className="fas fa-utensils text-4xl text-primary" aria-hidden="true"></i> Restoran
        </h2>
        <p className="mt-4 text-secondary">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam ametdiam et eos erat ipsum et lorem et
          sit, sed stet lorem sit.
        </p>
        <p className="mt-4 text-secondary">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
          lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-start">
          <div
            className="flex flex-row items-center gap-6 border-l-4 border-primary pl-4"
            aria-label="13 Years of Experience">
            <h3 className="text-5xl font-bold text-primary">13</h3>
            <div className="flex flex-col">
              <p className="text-gray-600">Years of</p>
              <p className="font-bold uppercase text-text">Experience</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6 border-l-4 border-primary pl-4" aria-label="50 Master Chefs">
            <h3 className="text-5xl font-bold text-primary">50</h3>
            <div className="flex flex-col">
              <p className="text-secondary">Popular</p>
              <p className="font-bold uppercase text-text">Master Chefs</p>
            </div>
          </div>
        </div>
        <Button variant="contained" className="!mt-8" aria-label="Read more about us">
          Read More
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
