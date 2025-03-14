import { Card, CardContent } from '@mui/material';

import SectionHeader from '@app/components/SectionHeader';
import { team } from '@app/mock/data';
import { twMerge } from 'tailwind-merge';

const TeamInfo = () => {
  return (
    <section className="w-full px-6 pb-24 text-center md:px-48 md:pb-20 md:pt-28">
      <SectionHeader title="Team Members" />
      <span className={twMerge('!text-[40px] !font-bold text-text')}>Our Master Chefs</span>
      <div className="flex w-full flex-row flex-wrap justify-center gap-6 bg-white pt-10 md:min-h-[400px]">
        {team.map((chef, index) => (
          <Card
            key={index}
            className="group relative h-[320px] w-full overflow-hidden !rounded-sm bg-white text-black !shadow-custom transition-all duration-300 ease-in hover:min-h-[360px] lg:flex-1">
            <CardContent className="flex flex-col items-center gap-4 pt-5 transition-all duration-500">
              <img src={chef.image} className="rounded-full" alt={chef.name} />
              <div className="flex flex-col text-center">
                <span className="text-xl !font-bold text-text">{chef.name}</span>
                <span className="text-sm text-secondary">{chef.designation}</span>
              </div>
              {/* Social Icons - Appears on Hover */}
              <div className="absolute bottom-0 left-0 flex w-full justify-center gap-4 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100">
                <span
                  className="cursor-pointer rounded-full rounded-b-none bg-primary p-2 text-white"
                  aria-label="Follow on Facebook">
                  <i className="fa-brands fa-facebook text-lg"></i>
                </span>
                <span
                  className="cursor-pointer rounded-full rounded-b-none bg-primary p-2 text-white"
                  aria-label="Follow on Twitter">
                  <i className="fa-brands fa-twitter text-lg"></i>
                </span>
                <span
                  className="cursor-pointer rounded-full rounded-b-none bg-primary p-2 text-white"
                  aria-label="Follow on Instagram">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamInfo;
