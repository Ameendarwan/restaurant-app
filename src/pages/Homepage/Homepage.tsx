import AboutUs from './components/AboutUs';
import LandingSection from './components/LandingSection';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import ServiceCards from './components/ServiceCards';
import TeamInfo from './components/TeamInfo/TeamInfo';
import Testimonial from './components/Testimonial';

const Homepage = () => {
  return (
    <div className="relative">
      {/* Landing Section */}
      <LandingSection />
      {/* Services Section */}
      <ServiceCards />
      {/* About Us Section */}
      <AboutUs />
      {/* Menu Section */}
      <Menu />
      {/* Reservation Section */}
      <Reservation />
      {/* Team Members Section */}
      <TeamInfo />
      {/* Testimonial Section */}
      <Testimonial />
    </div>
  );
};

export default Homepage;
