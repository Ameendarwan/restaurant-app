import { Card, CardContent } from '@mui/material';

import { services } from '@app/mock/data';
import { twMerge } from 'tailwind-merge';

const ServiceCards = () => {
  return (
    <section className="flex w-full flex-row flex-wrap justify-center gap-6 bg-white px-6 py-24 md:px-48 md:py-28">
      {services.map((service, index) => (
        <Card
          key={index}
          className={twMerge(
            'group !rounded-sm bg-white text-black !shadow-custom transition-all duration-300 lg:flex-1',
            'hover:bg-primary hover:text-white'
          )}>
          <CardContent className="gap-2r flex flex-col items-start gap-3.5 !py-10 transition-all duration-300">
            <i className={`${service.iconClass} text-3xl text-primary group-hover:text-white`}></i>
            <span className="text- text-xl !font-bold text-text group-hover:text-white">{service.title}</span>
            <span className="text-start text-base font-normal text-secondary group-hover:text-white">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
            </span>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default ServiceCards;
