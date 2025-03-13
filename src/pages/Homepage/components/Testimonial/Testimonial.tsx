import { Card, CardContent } from '@mui/material';

import SectionHeader from '@app/components/SectionHeader';
import { testimonials } from '@app/mock/data';
import { twMerge } from 'tailwind-merge';

const Testimonial = () => {
  return (
    <div className="w-full px-6 pb-8 text-center md:bg-lightBackground md:px-48 md:pb-14 md:pt-28">
      <SectionHeader title="Testimonial" />
      <span className={'text-[28px] !font-bold text-text md:text-[40px]'}>Our Clients Say!!!</span>
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
                  <i className="fas fa-quote-left text-[32px] text-primary group-hover:text-white"></i>
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
