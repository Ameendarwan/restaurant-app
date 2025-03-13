import { Card, CardContent } from '@mui/material';

import { Icon } from '@iconify/react';
import SectionHeader from '@app/components/SectionHeader';
import team1Image from '@app/assets/team/team-1.png';
import team2Image from '@app/assets/team/team-2.png';
import team3Image from '@app/assets/team/team-3.png';
import team4Image from '@app/assets/team/team-4.png';
import { twMerge } from 'tailwind-merge';

const team = [
  { name: 'Full Name', designation: 'Designation', image: team1Image },
  { name: 'Full Name', designation: 'Designation', image: team2Image },
  { name: 'Full Name', designation: 'Designation', image: team3Image },
  { name: 'Full Name', designation: 'Designation', image: team4Image },
];

const TeamInfo = () => {
  return (
    <div className="w-full p-3 text-center">
      <SectionHeader title="Team Members" />
      <span className={twMerge('!text-[40px] !font-bold text-text')}>Our Master Chefs</span>
      <div className="flex w-full flex-row flex-wrap justify-center gap-6 bg-white p-10 md:px-48 md:pb-24">
        {team.map((chef, index) => (
          <Card
            key={index}
            className={twMerge(
              'group relative w-[264px] overflow-hidden !rounded-[2px] bg-white text-black !shadow-custom transition-all duration-500 lg:flex-1'
            )}>
            <CardContent className="flex flex-col items-center gap-4 !py-5 transition-all duration-500">
              <img src={chef.image} className="rounded-full" alt="Team Member" />
              <div className="flex flex-col text-center group-hover:pb-8">
                <span className="text-xl !font-bold text-text">{chef.name}</span>
                <span className="text-sm text-secondary">{chef.designation}</span>
              </div>
            </CardContent>

            {/* Social Icons - Appears on Hover */}
            <div className="absolute bottom-0 left-0 flex w-full justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="cursor-default rounded-full rounded-b-none bg-primary p-2 text-white">
                <Icon icon="mdi:facebook" className="text-lg" />
              </span>
              <span className="cursor-default rounded-full rounded-b-none bg-primary p-2 text-white">
                <Icon icon="mdi:twitter" className="text-lg" />
              </span>
              <span className="cursor-default rounded-full rounded-b-none bg-primary p-2 text-white">
                <Icon icon="mdi:instagram" className="text-lg" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
