import { Card, CardContent } from '@mui/material';

import { twMerge } from 'tailwind-merge';

const services = [
  { iconClass: 'fas fa-user-tie', title: 'Master Chefs' },
  { iconClass: 'fas fa-utensils', title: 'Quality Food' },
  { iconClass: 'fas fa-shopping-cart', title: 'Online Order' },
  { iconClass: 'fas fa-headset', title: '24/7 Service' },
];

const ServiceCards = () => {
  return (
    <div className="flex w-full flex-row flex-wrap justify-center gap-6 bg-white p-10 md:p-24 md:px-48">
      {services.map((service, index) => (
        <Card
          key={index}
          className={twMerge(
            'group w-[264px] !rounded-[2px] bg-white text-black !shadow-custom transition-all duration-300 md:flex-1',
            'hover:bg-primary hover:text-white'
          )}>
          <CardContent className="gap-2r flex flex-col items-start gap-3 !py-10">
            <i
              className={`${service.iconClass} text-3xl text-primary transition-colors duration-300 group-hover:text-white`}></i>
            <span className="text- text-xl !font-bold text-text group-hover:text-white">{service.title}</span>
            <span className="text-start text-base font-normal text-secondary group-hover:text-white">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCards;
