import React, { FC } from 'react';

import { Divider } from '@mui/material';
import { FooterProps } from './Footer.types';
import ScrollTop from '../ScrollTop';
import { paths } from '@app/routes/Routes.utils';
import { useLocation } from 'react-router-dom';

const Footer: FC<FooterProps> = ({ scrollClassName }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col">
      <div className={`px-10 md:pb-20 ${scrollClassName} ${pathname === paths.homepage && 'md:bg-lightBackground'}`}>
        <ScrollTop />
      </div>
      <div className="relative flex w-full flex-col items-center justify-between gap-3 bg-[#272F41] px-2 pb-4 pt-6 md:flex-row md:px-48 md:py-3.5">
        <div className="flex flex-row items-center text-[15px] text-white">
          © <span className="pl-1 underline decoration-1 underline-offset-4"> Your Site Name</span>, All Right
          Reserved.
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <span className="cursor-pointer text-white hover:text-primary">Home</span>
            <Divider className="!h-5 md:hidden" orientation="vertical" />
            <span className="cursor-pointer text-white hover:text-primary">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
