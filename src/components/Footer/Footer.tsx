import { Button, Divider } from '@mui/material';

import React from 'react';

const Footer = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-3 bg-[#272F41] px-2 pb-4 pt-6 md:flex-row md:px-48 md:py-3.5">
      <div className="flex flex-row items-center text-[15px] text-white">
        © <span className="pl-1 underline decoration-1 underline-offset-4"> Your Site Name</span>, All Right Reserved.
      </div>
      <div className="flex flex-row items-center">
        <Button variant="text">Home</Button>
        <Divider className="md:hidden" orientation="vertical" />
        <Button variant="text">Contact</Button>
      </div>
    </div>
  );
};

export default Footer;
