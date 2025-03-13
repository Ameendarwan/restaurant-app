import { Card, CardContent } from '@mui/material';

import SectionHeader from '@app/components/SectionHeader';
import testimonial1Image from '@app/assets/testimonial/testimonial-1.png';
import testimonial2Image from '@app/assets/testimonial/testimonial-2.png';
import testimonial3Image from '@app/assets/testimonial/testimonial-3.png';
import { twMerge } from 'tailwind-merge';

const testimonials = [
  { name: 'Client Name', profession: 'Profession', image: testimonial1Image },
  { name: 'Client Name', profession: 'Profession', image: testimonial2Image },
  { name: 'Client Name', profession: 'Profession', image: testimonial3Image },
];

const Testimonial = () => {
  return (
    <div className="bg-lightBackground w-full text-center md:px-48 md:pb-14 md:pt-28">
      <SectionHeader title="Testimonial" />
      <span className={twMerge('!text-[40px] !font-bold text-text')}>Our Clients Say!!!</span>
      <div className="flex w-full flex-row flex-wrap justify-center gap-6 pt-10">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={twMerge(
              'group relative w-full overflow-hidden !rounded-sm border border-border bg-white text-black !shadow-custom transition-all duration-500 md:w-[264px] lg:flex-1',
              'hover:bg-primary hover:text-white'
            )}>
            <CardContent className="flex flex-col items-center gap-4 !py-5 transition-all duration-500">
              <div className="flex w-full flex-row">
                <span className="text-start text-secondary group-hover:text-white">
                  <i className="fa-solid fa-qoute-left text-white"></i>
                </span>
              </div>
              <span className="text-start text-secondary group-hover:text-white">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </span>
              <div className="flex w-full flex-row items-start justify-start gap-3">
                <img src={testimonial.image} className="rounded-full" alt="Testimonial" />
                <div className="flex flex-col items-start justify-start">
                  <span className="text-xl !font-bold text-text group-hover:text-white">{testimonial.name}</span>
                  <span className="text-sm text-secondary group-hover:text-white">{testimonial.profession}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
