import ContactForm from './components/ContactForm';
import Map from './components/Map';
import Navbar from '@app/components/Navbar/Navbar';
import SVGIcon from '@app/components/SVGIcon';
import SectionHeader from '@app/components/SectionHeader';
import bgHeroImage from '@app/assets/homepage/bg-hero.png';
import { contacts } from '@app/mock/data';

const ContactUs = () => {
  return (
    <>
      <div
        className="relative h-[400px] w-full overflow-auto md:px-48"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="flex h-full flex-col flex-wrap justify-between">
          <Navbar />
          <div className="flex flex-col items-center justify-center">
            <span className="text-[38px] font-extrabold text-white md:text-[64px]">Contact Us</span>
            <div className="flex flex-row items-center justify-center gap-3">
              <span className="uppercase text-white">Home</span>
              <span className="text-white">/</span>
              <span className="uppercase text-primary">Contact</span>
            </div>
          </div>
          <div className="h-1 md:h-[20px]" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 px-6 pt-24 text-center md:px-48">
        <div className="flex w-full flex-col gap-6 md:gap-1">
          <SectionHeader title="Contact Us" />
          <span className="text-[28px] font-bold text-text md:text-[40px]">Contact For Any Query</span>
        </div>
        <div className="mt-6 flex w-full flex-col justify-between gap-8 lg:flex-row">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col gap-2">
              <SectionHeader title={contact.title} hideLeftDivider className="!justify-start" />
              <div className="flex w-full flex-row items-center gap-2">
                <SVGIcon icon="envelop-open" />
                <span className="text-base text-secondary">{contact.email}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="my-10 flex h-full w-full flex-col items-stretch gap-8 md:flex-row">
          {/* Google Map */}
          <div className="h-auto w-full md:w-1/2">
            <Map />
          </div>
          {/* Contact Form */}
          <div className="h-auto lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
