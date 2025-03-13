import ContactForm from './components/ContactForm';
import Map from './components/Map';
import Navbar from '@app/components/Navbar/Navbar';
import SectionHeader from '@app/components/SectionHeader';
import bgHeroImage from '@app/assets/homepage/bg-hero.png';
import { twMerge } from 'tailwind-merge';

const ContactUs = () => {
  const contacts = [
    {
      title: 'Booking',
      email: 'booking@example.com',
    },
    {
      title: 'General',
      email: 'general@example.com',
    },
    {
      title: 'Technical',
      email: 'tech@example.com',
    },
  ];
  return (
    <div className="relative">
      <div
        className="relative h-[400px] w-full overflow-auto md:px-48"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="flex flex-col flex-wrap gap-16 pt-4">
          <Navbar />
          <div className="flex w-full flex-col items-center justify-center">
            <span className="text-[64px] font-extrabold text-white">Contact Us</span>
            <div className="flex flex-row items-center justify-center gap-3">
              <span className="uppercase text-white">Home</span>
              <span className="text-white">/</span>
              <span className="uppercase text-primary">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-24 text-center md:px-48">
        <SectionHeader title="Contact Us" />
        <span className={twMerge('!text-[40px] !font-bold text-text')}>Contact For Any Query</span>

        <div className="mt-6 flex w-full flex-col justify-between lg:flex-row">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col gap-2">
              <SectionHeader title={contact.title} hideLeftDivider className="!justify-start" />
              <div className="flex w-full flex-row items-center gap-2">
                <span>icon</span>
                <span>{contact.email}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="my-10 flex h-full w-full flex-col items-center gap-6 md:h-[350px] md:flex-row">
          <div className="h-full w-full md:w-1/2">
            <Map />
          </div>
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
